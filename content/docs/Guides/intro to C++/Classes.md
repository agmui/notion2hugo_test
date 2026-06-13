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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G3IENSW%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDgB8AKSi1B6F0P%2BkghM4Fy422hYpBRSRMlqD5EYK9TNAIhANAyn7gL47pJXms0vPTji3GeNFC9h4w0QbqWw%2FODB5LcKv8DCCMQABoMNjM3NDIzMTgzODA1IgxiCPfYyceSX8QubRgq3AO5u8W6UTYgb5Fjustk7g5rSgijam1gLrpYnBSXuWvtUv3JB9IfJRdhtr1n9rrGvZjPBKLnZdXAjTFs58xnOnOjaN8iZP8Y%2B4s1cqmxSrSfxKgKytb7lRex0HHKgXMGz7cLWsp6XlCDBIX0kOMOEn6WY5VhX1W6x6IzD4PRuBP4mFdh%2BhX9bQWZcr%2FQ5H7dOoTrvBJ7tShateOfXDIW2DJvtYTM3yuR6EMlL81csRbpMcSKrSqC%2F15nc6GzurkHVzw4NTSKLtkrNz8hfL05ViYv3tm3Uz5TimPULtpW3kwr1d4Z0fNOxdbRG0weYvHBd1lFMP32u3Ox6zJr65CkkZoEIPgTUQJQ7IwnMc4M3nTtP6NJZVqW9A%2B%2BQkjV00N2rt6JC9%2B4Faf%2FPDl83MOSMnNuXxQbYovr5eHsLWG%2B2Pyu0hidAYqMVwD63ArKgwaf0pUJRh42RfKvwq22IBE4z00A9PcZl4uOFxsGd2r%2BySYXyLrQLhXGQeZDbxZ0k4HNk8%2FUyDyS4ga%2FQ9I4fx%2FE2JEnlA0FATDJhJlHHJV%2B56vOnwMrWp2S79YHwavlPHUC8tqG4%2FEnccQwhB6cYb6xBXOFRTnKp2kIPvhU3agwnT%2Fe7Nmnnu7d%2Bz%2BBMfbA8DD1%2BrLRBjqkAZc5qULCkX6p%2BNugWJ6%2BO798HwixkiV5qFIFQEVs3BEv6CbARhJ9YgrnmXbtqQ58BDeEPPBrdV%2FecS6H%2FjgBdNKzBxoSXlbbDRRDVN68lYjrO%2FDIjpC50BC9IZREp3zpW%2Fju4Vd%2FB6xevdLxZK5sX%2BBj8Y8HfFITxIzH83ePCUasavHNEScd7H2fDdH2i9aP0eHku6VtP6UV9dfUfbS%2F5JbUtaBo&X-Amz-Signature=82e677d5b31ed6b3d0406778c0179fce2caa13e004c738440ad4d11d4fa4fc08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
