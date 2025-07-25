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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNDHNTYM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCtYy80srqduRqJY8iRlYpf2vcM8rYZOJezRj1UQoIf5QIhAOuoP00h2gDnWQ3LuwQhH2qgL7D4LTwwYChSZt%2F2QffrKv8DCEwQABoMNjM3NDIzMTgzODA1IgzcRd3k%2BdJWK2IjBmsq3AMOT6anI5a8IcHZ46ydrxhDmA0D8Yx0qsPTMXfK7YWp1dyjybZZTQvkqoCetJmhofspJTbx3N4EHqKgjhTI8s37YViewkxs0NwjdRT%2Bupy1SYH9JnXlRW74f04s5xPVvGm5OX9rBoQ%2FJytf7%2FeZgz%2FyfdDb78Kl53%2F6jHFfXHc7KNO2BabvtRK4BedsWj1%2BR3T6V9T1trK6uthE3euUhUYX76Oc0S7dGuViVjb1MCLLDHMBX1wGZjv3fOb%2FdGIRD%2BX3RaGuBzFN34eDyNGNSgL%2BVAn5HZlU9RVvLbwsy2lE5ewyWO%2FNZcROVrWaGBUKXYpUMGf%2FlIEHbtyv99ztPFn381XscTHRxTr3ywSeXRjMifdixjZF4AsNczhttimU8VSUOd63lhBBIUvNFprur0sDJjWojsDB4IBMhY%2Fe8RRPK2Q8RIG2O6MJQ9%2BpMdz1rCbMxXg6HqvZ6EuVJSZxYZWSQKgOlOkNWwBHxfy06cr8kToXkgjA0xnwWRQxzuJ7zw9%2F9hjaVdZYwpP4Z2K1InJmVQETyJUKn3W7xds4sMPJd6k2NuFyYlTAC2v7%2BtBdAzhkkRsSIwCS1zWLiHAnLeIAAHdadHhWYgTaW3zZ3DDWzW144tHxXsj3ts30FDD0qo%2FEBjqkAeDAlBxTuyrFGkGkm01Eyem71p4vUAHOc8rw%2BckpMZcietm9bpVTuliHjNWfJViLTYhKXuwAyZ%2B5qqZmdWjj21esEXPhaP3JZGlcVI1hqj4DHfWV0xqySTn9NEnS387aIa9Pab6ren8eCjvfaZkbIvyIiwr5D6Mic1EtRdlsyE7yLfhkMYMGOotKF5%2F91BSpZ1ErRhbtmmai3TvwQ7Juq7oYj4uB&X-Amz-Signature=ce3a638ffd130b58f44d23c1383a6185fb5a42f7faf36482ac29ea77c6e52f79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
