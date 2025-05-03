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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6U26MBY%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIBnD6K7mCH8nW%2B8kKb3NOqqFN3SF50PqfyjEa%2BLuD6mmAiEAhY7FAL1ENFEbhy6NGws95i8C%2F0Mm%2BL7Z8rCF44p%2B%2BfkqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxaadIj%2F1JU%2Fs35wircAyQURogpH%2BYUHBJUARaX2ousdYs3u4NYt6bKgupa8cvLYNsRvhy4hdd1KJdgfISgC38D4F8M2zEzor3SdK5JvUVRUZtm0UMvVwNfZKfZ6pP4DukODN3yEHWhogN7SuvZi80PdX%2FX5HTvfqvC5bxozE9kpaQV76k72llDcXuQA6B%2FK45W%2BT93kKfuqO4Mx03AyalC9D4YOWVHtDGG8ivLIPr6gzt37%2FXjWLqsMtKR9C%2FATfkM8swo95gm2X3SxVGGewpfXqje7Rxgnz1DuJmuk9%2Fjhn5AmcmFjhX4ykEcOWeZUXM0T8jt6lbax9rvru9744OmGCz85uZNmh2OKJ3Q8VKXvOb0JuBHtmcYMBV66v2vnU6s6kYHJqM0VA1d%2FUBabCyPwRsvoKtdwt4h0bp5HBA7Thh20WQhcVbRt%2BZD%2FadH78D32z7lgC392ipRh5vnCvcVkvlBxewWM7q2V85TRwocGOMnOd0%2BViG5q5aEzDwUmDmO2iUoykERLDDAhX5NkjeX4KV%2Fk72RClSSx4GYwdOG2CD0wYQbHKbBhjp7Qidv%2BQFzrnbSp92jJnSVb9DMPJvo%2F%2BswI6S15dyT8gfSIR07Z0VDjSX6l4muWEtTSQ4RsIIqEJswVDUT9ZZXMKPu1cAGOqUBK6pLB6xYGJfJuUjDmqpMlsvAwBeXE0CXSszpXxKZhmQr%2BTOoXrode%2Fm4V2RI6NpuDfhDW%2F38aAmMyFltvIA%2B2bGv4pcXLxY5uwaZzWwurmoRpqrbsmC%2FI0dBXJG8UrIbYG%2B4c6WCfOZew%2FCavlSAUElqw60xvAaaQgDjYOWck6CIQdmXB38eGgE5Iwdu8Q7f6hYw72je%2BnaVYkzkwdp6kHNwIc%2Ff&X-Amz-Signature=9257658eddd6b230044ecb0ed907c6a80e0d9b78084645ff8de5eac6d803598a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
