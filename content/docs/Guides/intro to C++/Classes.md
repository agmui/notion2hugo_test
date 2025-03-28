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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAK52OFM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwHnHc7a02bqepsbzWP%2Fs8KIg8rp98Ptk3RC1ouuGptgIgNREoDt%2FpDRbm5VzGhKKkwW2c1xMXLs9Lpvge5AVJIc8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDFjQXcMKlwanJNOcayrcA1HrASvgY1eS0XfgISeVH0BH8qZK2TTP5FjlsYRlcI3BwdkdQwlzlvdvtmWXq3bFvsubD3dFTTHhkDYuApEpW36rq2zyYP0quphmwjpDZ96Rhi%2FHNbJDYWJD7nNYT8cnlbzg2pc39VLVSXazjakOUdN6NzZx2DKh4Z3CpGnQoE84GCBwS227OTM5wV1T1wthoVm0T1BgFrFXJMPZW9qOfrzfE350N1d7tnH1fqdw2i95I9yfrWP499xnRlh%2FCh0q9kbPkwubvErGy8%2B4YCfhCSuHtwoWgbS2zl%2BxNuwZLXQAF7%2FOKTsA6MBUbnNHzPgZ48LT92njN5h3oX%2Bi7zKoo%2BcoywGGQbOLE%2FcunSoySnw%2FZTAXbi%2B8fwuXKzmRo2JjzMpau4jjSX%2F7NXCbYSWFf8A%2FuNEgwbKCt9owF5SOjbyFBYFifrNyeXKGoDzwLGdYUvs9aMXCl%2FqgrKEbOrn76pIOhQuLwCMIJBsjTnzEOwR6zFi%2F0aNp0Ph7rI9suHrDId1Xfys%2BRP6ywr9%2Bqqyh0r3syedqjsVKu3mATkDifQTtL39z%2FDW33kGHhoLLZqjNMQUhyuWgooIJv2rOPoiDYncICdGnhw136r9ozkQev0vLyasc9WtFJxbihk5hMKKJm78GOqUBTQokpvOHjYN3sYXQkmDTCmlv9QBpXwhXaHlAd8TiBpsYINgL67ekCb%2BNIF0V%2FJpcPj3hv6cCrXZxar3GKsTKAAmjNanDOlnjrzZyxOrlFG%2FvKJE143IRPrqagr20op8EMM89yWN2Wa3AiZltlv0Qjzvpjh3Hd3KLP29uJ%2BLUJtEE0SrYdidTDQ5uou9bGiDhg%2FmyfGm0dvAlXokqUFxcex%2FWC4w6&X-Amz-Signature=74173d56376a78e63189c3c9313c93f249b70d5c89829c2bab8b10a6cd4bd7cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
