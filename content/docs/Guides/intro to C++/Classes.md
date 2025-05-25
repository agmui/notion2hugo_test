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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AIVQMD3%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIAHBu0CN%2BntKqTeUn1haPpAfotzrPapggbM7ZfzIwynyAiBbYNgUHsTTtsmlNSwNMw2sQbk%2B%2FTSeqZx4nEt1iy0%2FIyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMEsdEgxA%2FL56Pi2L8KtwDOpSBuAD9IIAfgee45azGXCzBj%2FJi5vOob%2BgeKmjiMO0dgIPVhJZLn%2FsO%2Fx3N%2BKX0mKsBEN3SETYbaPj4oG%2F4gvPfn6x9032fhsvnY6EFkx%2FZ5gVjQKc%2B0w4AJxE%2B8x4V6avXakIH1JwWCMoN5m0VLj0a1eLWRgTr6tQGVyzCdG4w6Y66o3NIC90mzl%2BMK37avdqy2iMFmU6gQ81yOzg5KfWl5Zkq3KR1HlJ6%2BfB5vBdAc9C%2B7l7TfNIkGULO7aSVXm1mTLo3NTTpaeybNDCozTAEp9Dr7MWiy9obXOzZdb%2FgrHa2KfV0451IGxuJRjFyFv5UbtiwG0AYP3p7nB4lp8pUrfxXBHdONwFdD9yJMH4AFRwFridSgjL4HWwXSSe%2BDPj1OtswEhWSHmoYeoXEvZNTGJKrBp5iQtb5BgxaYf5ZaBcxJ%2FCiiZ%2BMTFGmdg675ruVWpapnenzcHW%2F%2FT5OiBT7fuaW3LNSJ1%2Fd2r6Yy4bLnphyPnUYgyPUuTfAtzBU7AXUT%2B0VeST3NyjdO1Dxk3a32rtN%2FsLEhJoLU0DbgX5ZPG%2B%2B9uvGxqeRrocaTjpk8Y0Q3hHYhVLl4yHIC5QMS58Ac2mdo9Q9t8Ywwzpt%2FZD7obz7VHbfrnvCkq8wiMbNwQY6pgF%2BHImaKR25tImhzJOEweS5mzRjp7eXUA0sHsUsoAijwhnoyvPF3hAFPIxa%2BMfPjmBTyxIRGBM9YS5uMoMpiKB9ljOiCh%2F9hRdVL2ODIPiXvwY20fHTP5qbEcXisX4azIkaAvXwYd2yXqd3NpRvk7%2BaEuYrdsNEq82bK%2FGdb7q5q%2BpN4ac%2FMFFwJtJ%2FBUSHcPI6D9W%2B4dG0xFx4CVYkUjKy9HilpdEY&X-Amz-Signature=ad961ce4a2a63bfc9d9c6814c161889daf95acb6f6f4571cd96abec44a1566dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
