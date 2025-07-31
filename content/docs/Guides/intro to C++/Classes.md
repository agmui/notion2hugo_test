---
sys:
  pageId: "2329c1cd-96c8-4fd3-a4f3-9920d69d1c8a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-11-08T18:33:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Classes.md"
title: "Classes"
date: "2024-11-08T18:33:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 113
toc: false
icon: ""
---

## basic class template

```cpp
class Milk {
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {

    }
    ~Milk() {} // deconstructor
    void drink(int galOfPilk) {
        printf("drinking %dL of Milk\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};

int main(){
	Ilk i;
	i.drink(1);
	
	Ilk* i = new Milk();
	i->drink(1); // arrow syntax when i is a pointer
	i->~Milk();
}
```

<details>
      <summary>What is </summary>
       `~Milk()`is a [de-constructor](https://www.geeksforgeeks.org/destructors-c/#) (its basically like `free()` in c). Unlike Java or python, C++ is not garbage collected so when we make an object we have to also manually delete it. The computer does not magically make it go away when you are done with it.
  </details>

## [Inheritance](https://www.geeksforgeeks.org/inheritance-in-c/)

```cpp
class A{
	...
};

class B: public A{
	...
};
```

### Creating objects

```cpp
int main(){
	Person* p = new Person(1,2,3); // heap allocated
	Person p2(1,2,3);      // stack allocated
}
```

```cpp
class A{
public:
	A(){
		...
	}
};
int main(){
	A a; // Note: if your constructor does not take any arguments
}
```

> Note: you will learn what stack and heap are in CSSE132 but for now we generally use stack allocated in Robomasters

Why use stack over heap?:

This is what the `new` operator calls when ever it gets used.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN7KMBTF%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnV55Q4J%2BdRFE07doZ%2FFGvK81sI2TeXG2OZtSiLeGxPAiBoVmNWUNz7wWTsEZEL%2F0dABCIcWlkTdNN0VmkbS%2FgVACqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BSxk1Wr6zWAglRHrKtwDqUkPaQo9zZ9BsU9cEx96SfCy8%2FhlAaFfq3W9r5oa7J89KB2NdDNEasqIvy4KRQqE08kUAVAB8Zfo8V%2Bd0fZVrJ7FA6f3CMhwilBWS%2Fb%2F%2FC2Nfs5odUiN8uGoXy%2F9UaK%2BfpivHbAZIJ51aJPwD3KRVRMPXZnB3hK9FdhdyzfyElE%2Fc0zENAnJZK3nNLelOKPj9v5u11b0WVM9RU7x4SZVAfRpi4Q6rf3LNE%2FV0zMK3JSkWiB7gzU9f%2Fp%2FaIR8xsNMzE10FsKCP07q7aQBjIyOgp0wtlSnhot%2Brvu61GeceAPnuroQk%2FrI6Yvz6rohZAj5ijzIDp6bCTORhIygAFCFpK3cy%2B2QOajw0YCCn6yKKvc0VfYZvf4wNLSxGFnN0%2B0okGUzg9DJ70mILev9qE1RBNY9%2FcggdRH2m%2BodOqebn%2FA%2F96o2F7bHNRYj3uZzyXAP%2Fkh6ugRlhD5xGt93uYn0bwnJEPFsHVH58FZiXsIflozgZ6%2F5YyXLNoNkY%2FVeRY35fxGhAVQIl8qP0pog1YgsXAatu08KWlytB067KXOW1nICVBaIg8kSS0Sr8yrPcn%2FczfwGhV9WsxS6yNGQ7DGy6nERulJxGbRAnX4Q9Z5X8%2FpDg2gvryuAUsaWHJsw7oCvxAY6pgGSmkdLuzT97c5zGHVRPNA8JEc1JE1wCWrelsUvks4zHW8shjluf%2FUKFoFOqOSXslF7Tv1%2FaDz1Va9dIpkJRa0bw%2Bjamstd7972yQWvTSrGdY05Cha4%2FBMwIMRMZg8GUlL3VGi68BXNHHRjTW91th7oprx6iqDwjqDEjRDoH9tIXF1PqG9y29Qwq4JjTfsAZthd16brR0bxwVxalFx5fMaSgdbp8wjJ&X-Amz-Signature=6c4986daa18d1faabe32de15acb3968d57fd1371a50a52b0ceed7e63ca7ba27d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Constructors

For constructors, there are 2 ways of doing it

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
		MyClass myClass;
	public:
		Person(int age, int height, int weight){
			this->age = age;
			this-> height = height;
			this->weight = weight;
			this->myClass(69);
		}
};
```

 _constructor initializer list:_

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
	public:
		Person(int age, int height, int weight):age(age),height(height),weight(weight), myClass(69)
		{
			...
		}
};
```

We generally use the second form because

## NOTE: YOU CANT CALL CONSTRUCTORS WHEN DECLARED!!!

All together

```cpp
#include <iostream>
#include <string>

using namespace std;

class Milk
{
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {
    }
    ~Milk() {}
    void drink(int galOfPilk) {
        printf("drinking %dL of PILK\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};
class Pilk : public Milk // inheritance
{
private:
    string cola;
    int numDrinks;
public:
    Pilk(string cola, int numDrinks, int milk)
        : cola(cola),
          numDrinks(numDrinks),
          Ilk(milk)
    {
        printf("pilk\n");
    }
    string getCola() {
        return cola;
    }
};

int main()
{
    Ilk *i = new Ilk(420);
    i->getMilk();
    Pilk p("coco cola", 420, 2);
    p.drink(1337);
    i->~Ilk();
}

```

## TODO: explain → arrow syntax

# Exercise:

make 2 classes:

- Car
	- string name
	- getName()
- Vehicle
	- int id
	- void drive() // prints "vroom"
