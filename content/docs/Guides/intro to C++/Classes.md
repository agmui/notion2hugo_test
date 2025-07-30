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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LBRD5LW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq2hna%2B1TvV8i10AQQMukNP6DpcPATVxHLV%2F4kvdu4iQIhANXnlWZp16Yi6qMZEbOY3PaxxysB%2FbJ6rSyZXEqTHcUOKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqojKZD80QVIh9be0q3ANQnFKCXEsIu%2Fw%2BcIR1FGV21gbDdCMQv91bodZ1k2EDDZ3m80DlsAJEWmRbJ31RQt%2Bw%2FcUCOKmtf8OmGNMdhp6vRIAn5L2hXzqKdzMepB%2FzQo2CJnQItkBZp3xoeMx4RnXE6hQSYXFzdedBcfOC9m2igXZuA9bBwvUTRCFlkKasKnP3IUq%2Bx%2Bp1qOm%2BSiKg61nd4CFHtsPMbUp86z0quJH8lWYVoWzJTXldz4ONeE%2FatgDt11xzWL3focQJaW%2BnPBkTGKoIHYpIYI1mYIHkwLGwyIywW2g7AkbovMSABdh%2F1ajmKPvxCYIoAKgigwxfs1truc4RUt4Jks85eIFib2vx8I5C5%2FBAjDXHYJ%2FawqKp3m88ou9iA0ZyhL%2F4fs1TZd1CPUJkJtJuQEdzyQbSlnFroxIgE0R8yHrSJq8Dg4Fe3jbN8x3uvqYZp1iN7%2BAz09NvpiBMQ7jdShSRWLv%2BLCIhIjoA%2Bjhva6o8Atf475FKzZNfXxdNZZlPWgxljYSMwPVdwtCa3lK8paDOA6tXG6oSw7kwR0L2RkGQAjBJ6fq5S45T7ynxo%2BwKI%2FWV%2BacHI9K5RyQspM%2BrERZHe5t7Wj7krE2bu6ryUXXg0NGm0AucRc6V%2BGEGseVSFM649TCHoqjEBjqkARku20sHVdyq04j6GOOPBYDE962XUqM91Bodh8C1hgo97KVFBqXN2BfyJKioANMsCMPsxuee3374CSsc1gCF40TzCnkWcw5mTSRGL%2BuC%2BuuYMQZOmuWf1BL5rOxljAFOl8gPd%2Fi0cN1BNGZRTVKxAL5mt9aLp8lQ%2FY2N%2F4Y%2BH%2FRD9iIHX4y%2FnbYN%2FMCRZnyI%2FZEVtw9nmqekh4VNoghLxUiT61zB&X-Amz-Signature=7bb941b1f0cc84a971dcf53696cadac12b356f93146c47f7a877772a90db6e51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
