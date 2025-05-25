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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S7G7NCT%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIGKxTZvp8j8DQ8v8IcD%2Bs5IjKPRF%2BWyPOQaszNpVZKFNAiBMsZzk7A9HMeMj5c4O8CYAdJRLC%2FkdROe6DdR5FFpvuyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMUIHcdZdNh6JErp8gKtwDJLTOavDocxGo1BndJP9g9wRwh817HV6G4uMI1gVkBUzn0U5dfWWAheOYWYnHaNJsGFvhjjoLvgG1s37YzS7MrD7iCUrrXhYyWD5h09o4IJa%2FZZ7UdHCH%2FwgPyDl1UWfbLdWxrgdqAaL2zphKLnyyg2vZBmumOu2gjDHTiWywJ6qMMXaxHeY9yo0RRkqpdJV0eAABNmUaYqs9gDyB2IR8P6N%2BqS4KXtXQTeereehzkmMA3A4tuhoX3PStoDYvBC9op56w%2FcFdEUoZFiWQKflktodrNSQzz41KbyTPRk%2BsOrtLRHFefRr6HudXx4Ekv%2FhtmKW3VRXMMPfxlvoSFjcwaR5MDAyasXttAL367cwFNM45bySKxGfaR%2BTSA63Wsb9KZxa595H0ocLpLEBQYZnlncsDllD%2F%2FQf3N0PLJHvmqpW5iSbpVieqeaUOK1OoepRdd5NRkM9ablAPR2Fp8grm0A8UyFUZBtZzVNrWkvip3dffc3FDYWjx707xL4S%2Bq0HLY7swZa4mUM2fIekXUtx7ehHKazyG7dMprN9U7M7PqvGDcbPieJT8OGnyTo4hoDX33ou4QSK%2FhEW7R%2FoAVw6SHigEPUqpMYSB87PvvaADhImSBdfX%2FS303lN7UZAwlqrOwQY6pgFXmD7CzcnUyu%2Br7S%2F5%2Fa7VIyo%2FPmftzVcUEYBve232ER%2B4UyolrlO2yDXw1CXiDNiPOTRn9rPVAICopowpCr8zpLupWSAoEqZunpSqL%2BoXs01zncSHL%2BzCdBQXK7dTCW0NwQhNm0mIle4hEdakXCI%2BajefGZMASLvIeg6btIDsPcHxpuIC3eg%2FfV12J6%2BcrAr0%2FUdKHbuzSA8qKZF2Wq6KtB8n9XYH&X-Amz-Signature=0371a7af65d3661fe98c114c6c3a03a41b28d9aa82df2a919a1bb01a7ca95762&X-Amz-SignedHeaders=host&x-id=GetObject)

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
