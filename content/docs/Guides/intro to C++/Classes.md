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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO73LRMF%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDoQGp6O%2F4LsqRmhn9AS19xvjMllkc7piMZFQqRgcGPXgIgBMQZVyE2WlJdsk3T4q5vTk2WmMGU1IhiXakYuu7Eg8IqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9umgRUMOOdiMbXmSrcA%2BIgBEE%2Bhw3MD4B9qWQtwEJcDh5oapA5NukMQltomt0raQNGYEVdwvlSsRbweLzEQuFGYkFxo3huVT9RrfR3cDzwQruXhrs3XKiy0OZg4kWTTel2ZWNNqkngA0%2BNUO%2BSUw2L%2Bj5%2FBbSPKie0NAJHzmiG4m04Ex%2BKyctSC%2BpHYcuN8U2yIixDYILp8%2BPvXdULy7eJLikI9Mr8c9KMroMegKimVLB6U09msgXhWc4Ad5Bjz4UGJhpwkMQgL1VYN1KPjZ9xxHSdz4x%2Bj4hzjgNAZ7qXOQE6S952wW0lNb0wuZitZMEMSOWPY%2BRbHFLUiaw5qjEAx3XN6kOows45kNw%2Bswr0BiwyZTjYuephMwVQKCfT1oEztmUCG3ZW2%2Fsf8jSR0P5NNCk2fxpBDgLcCUT5U1COsjsa8r%2B6dkq1XezNGQ%2B92p%2Bm%2BS3Q0Puur8DS8AEAyRF7x4Mu%2FSypLx89bNnkoSSdxqCrJNXg5E0Z82e5bXftCC98KnzSdek%2Fx0j0aiwQ3T%2BRhQ43F8yxB1SEhynF0NcRKeqZswBI3Ehfgb2NF7CXhn326ktIxGJAJxp0SQoqMWygRc4uY%2FwU%2FukaoRXDg4UCYbzDX13tkzih7Ty8ThFx7X58yhT8RyDeiYNgMP%2FzpMAGOqUBFw8wx8c%2BsBTwQlcDUuDQVIuXLJC3WdAt4GS2IMglLmqfOjXcHOquQbQvfrOOyPTuMZBlu1U4Ra0kLe4msHz9gNk%2BhhGxHFEEtzfn6zHphf0WuVUTvy5QTiZZOV5%2BPu9OTjpI36ewNMLNL%2BQroBRdy5xoTh6RkzwwVX26Loz56bH%2F9Y1F64hxibviIiw6ywDSi38wML0LL0P3i7vi%2BjAkL6BMjZoH&X-Amz-Signature=832a981e217094f231e3fefb41096fd6ebfd831a9539f52128a6a1bc90a43d88&X-Amz-SignedHeaders=host&x-id=GetObject)

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
