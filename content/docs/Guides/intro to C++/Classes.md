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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX6UPYMV%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCICAeTGxkj7eHXc3By1VcUAUP2EGMMbSav430txZh%2BqzbAiEAsohOd4jrAnkniJx%2BuHsTI9GAbNgUpap1drNgh0xEixgqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQdHwAHqZgRJCZ81SrcA2NEPE%2BRkds4SxU9TA3toLTVDVSfpZSlSXZmE%2FbR2hRz6oFS%2FdQt3g5traHauU7hFwooEmwV03%2F3XwxOZEE8gSD7k3UMa7cH%2Fwuwfxhw31OJoNDhe9kicrFdDh7qlv5ZcfOegFM6fgm%2F8iufeOTDWkg4JeEgRrNUK4Arxa9fxQxtrWYKcSA2xmGmJrAX2%2FUC2NGb3R3O6Yo3gXxBL52ChBCjHlovgbvKewbggFkEvgcotBgPHsW%2BXawfY3cN3PB7rcFSgP3n1oCFx8wamVnE9w6ciSWzK9RbM2IeZkUGJ9%2Blj1vTFZWrqdQUsJBOT66unIDHvJa17BdBk%2F5NTe9DyUrjdju%2FHRtJO4WDCkjuBvxiQXFIqvkk04FurpUy%2FO6BQr5iGOY8IZPCKKLXdUmcR2CZP0FY7ar%2FnpVNveWWo4Rv3AdImiVuRbExXsg8KSByG3Yz%2F%2FQws1k8KvsJ3kNpfJ4ZQqWNCpTS0C%2BHGKRRJzfPbU81O7FQAf4x4CCkVloST7rT7B9zgFK8E1cEGuxrP336dwP4Aq6jvisxduvXFBmCQWC2WBowekqn7kVqiBoN4KiOpjNDtN7jtG3ui3Qo0Xg3bS%2B6kzSwwvQlLYoOseorvBQC948anyO2qcXdMKGdycAGOqUB1BrBBbEAU6uwqMKMllZkKWScsiIzI1tGauL0VtvglcNxkX1yKv4irA5AGeUoGu88yxt%2F80dODDJZePrJdsb%2FahSJOcEq7N50Q8WjPHFRejuXwbIZo%2FxaO6xGWSV%2B8I%2Bxl1kSlcReUgxkCWpESPXf08xhib92u9nnbTDzotN389i1Z9NgLZMQXef7jILebzHX17qRBvQbzIKxxQJzQBxOo4HGL89g&X-Amz-Signature=23bd0d5157a1afb94e0997fc760adc6c30652e2a6cb600fa88df4da0fb0060d8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
