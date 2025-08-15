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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZ72OVR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCFIz788KWfiym5ZEqc86wzCoYiLlcV%2B8rL2D8nVaMWTwIgTPC5dOol1RTmiJk9V1TQ%2F4CnSzH1lV6ebt7x2%2B7elpkq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJ0jMwFMiNMwlwiGCSrcAyPlVljHU5aCTiyDHBTWNaz0okz7kr3dmdqPCePu5CQsdUXDom9xxf2%2FagZwlSgVB%2BQHOVQ9N1cID9ZsHYKG0TZL3oazcrYXfauGIStduID8AEaPYXF2VEokeo8xOMcVoaWoqPHC7lLPrkH9NfAaScjdDHHFIQ2fVIS9Lfxi5RGbqL8d0OsvEcCA6fn6IU76YOI3snZCwmc88qPETEcKeUAwCVAaf8gwK2bx%2BnbRX7xI0VdZPPs2ErBdHg8e%2F0PnITWDOpWYZcJRSCMaJP2mDsT8ZZchiKLQG27v5luX6%2FI9Tn0B%2F7N0lOQ7xePfHmiuVSti1E1LZwXxWZftN9xIniv4QXOB4l99Hofqj0wZ3lssuaMrleoaEQFsM7krP1%2FyNm4dZaDduipKcJxjD7ncU7sKP1rXiX%2FE%2FrBy%2FCK1ow3WHox8Eu4z4iqouLFJj1lM3TNcktuw1Ta3cnuNpfObB5zk8vLveQzHwQQtVkX%2Bxs4z4pHhPWryypOGqb92WAQ4WouUStG7HhXDhOPIsQywmB3nmntDdirGRV8ABBhFrlNr7uFDl%2FgRID6fraJa7nlF4WzTGy%2B7XZ4ZiJ%2BywC%2Biu2B5WZk7G2tpyZJ9gfsMxYy%2FixcW4u2M6InwkJ%2FVMKe1%2FcQGOqUBXccnc9ZRgtGu7aKjXOAZPURFguhmrHnbDyQErh7Hp%2FQtib0Zo8mvi0iyNPeu1P%2BVL5XadOwWWa%2FYCCBcnzSgZcoGPqbmX45e0OjH9n%2F3PxQCMNf3SCVVUrfzGR6GbbbvrXWEruzEUSENM8UA6KeXlzy2bd6ixw8P4tRCmAM5eNNReCtVDI0q7oJ8wUg23H0LPSdctZz9e7HdPSJm7V3huGIL3zlR&X-Amz-Signature=63416a08e53726a4845983d87a207d15b929158d003d982bd26fcbc5886758d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
