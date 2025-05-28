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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662K3M4U7%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm6wdmhSA5%2F0slwQdZ1yECjU3fJKQNm22KcKgugW3QywIhANbzluCeqOVSzqzJd7v9orEvyNDIb0CVyLgj5v8sr5%2F9Kv8DCHoQABoMNjM3NDIzMTgzODA1IgztAXOj7rSYYyg1hNwq3AMKtemSVTmGB7s%2BXcVDdoIqYfsIbpdQg9BU9Q2IPyrSAYk%2B9%2BqnalUTUPsHmZOy%2BiSXngvnBXRtU5LM2xJDcEihdTYTvlbU%2BeASuKzrkwfp%2FwbCkRPEswVhEj7HTA6qPfOel385UxOfppYiWk6HpueiM%2FPvh%2B1ZgTgigCnMxWwEWYHOpH%2FsbXBT51mH21Bdzhv%2BkzZjt6kG%2FTET2XZro8TLNOUpIrJBKBoVffO%2BtFIMx7028vepqzfm0HHYt2T7GPfRPsKVHOAJ2VKokQX2M8%2FZc8MP3rXLntuWPaVPJ7sE6moZUiihKHIeucjj87NiWe8ClppH3Z84DopjiKSp0MWvdSISl8rXsvroJrr6%2Fboo2GsTv4NPagjQb8si0MjSLgpOgWnmWnxkkSPAs8sOLyJCKwzvmE2tt%2BiMpGZlLZZZSuIgMOw0wz2SudIA%2BauNt5EIosfVBlZTZisPutQ1am%2B88BAORvxa7qDyWPF%2BuyWG%2BHvpwfdwiFkp7cD%2B%2BzJc4Sz3ko1STJ9D7MoEuA7eiUqemPENkpEpdJP7TmuhA6dh%2BVyMxslFeYRRJti1KL5T32zO07E5g6WpwSG1rM2saZv%2B%2B2Jz0vTjfBK4OSLXl8jM0T6%2B7CkVV6R93d4JGjCH%2BNzBBjqkAQXNqija%2BK06YU49jmj40S9ZnIL8Ilm4OzBL3AmGqI6DY2QbAHeoieR20CWEuF9%2Fv7MHvre%2BQtekP9qldWF4hs3XuiU9LB41Mn%2Fguil5lzg1TmceqWdqyJ%2FUwRH1NTeMMTylbkSeOuJTkwcGquywkDZrOyxjebIGOLryBoiGJmH9cmP6gRaccTwoIEsQxXwegBbNdgeyKDxx5KoyFy3f8OTFx%2FXD&X-Amz-Signature=7a183b75fdc63ee63388ee07c96603b8d518d46bbeed149ab2894b5c5a83ae86&X-Amz-SignedHeaders=host&x-id=GetObject)

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
