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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RADQDIY7%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJdr4Vn4yVhxkXyC1p2Bb9CdoG67TMfPS%2F3fV%2F77GH0wIgKbIkBPrECBbWUDf3o3WzJHMGWtH%2B8mEZjaafM8YhBWsq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDBbxEmP1OrUSja2FcSrcA89wwi%2ByCXADN6ZMzQCql7xCiVBIoCI7iukg%2BsRBBQnvYc8uTesTSyigAjb2lWxZtkR5XqfvxrTMdWGIbsWxdZmwjvG9SctfCf2GUc4cxZVk7QkTnRiUgVCyablm0MiAhYPh7%2FHq8fgPLXySoZyKGda8CczdH6%2BJMVUnSOXZnwW12jk5%2BM4CCQTm46fofDxXuoIyXeWhxjp0DEHe1Eghz1lYs1BqJ8P42d0AeZ0CsmrmgeJB5Sjl9tDa21K6Sd%2FLBwQg5yUSRwwW46C0HUsh%2FgUaaELOELZtZ3SQvMApwoF9KeBclK5LyS7PLXv2aGr1ZlwPBHlVD1%2Bf9PH0BTQWptX7JrjNESxPsf1RcizMQ3xKG1RUKH9J95SU1ohuG7V9fEwtlzWSUW7zZMSPFpiHQl0Dq703xjmV%2FL3TigzMN9me6b5rpSOOPcjTe0L8rI5QLpB8%2B%2BHoBFSwqbzMMUTSYEiCCFOYdMeuRUtWalzHueVnGKvAOCsIknUPBUrH0QKwX7DTh8MCLyZROe8KMMEpeSwmoGlLD0wgD%2B%2BO3%2BmnCPb8jYmfEmSrz6rJ%2FVETIiaIN8%2FAGxDKlLjz5%2BwclgV2L8ZEYU2IyUAcMVG6mvKwIo6L5Inb2rV5saAVuc16MKKVg8AGOqUBnhs3UDgqGS7Jb98CbX2hPeJtEWWIT4yfbOdD0jehroA4Kq3M8ij5mxQ4Jt1BfYbygL7oFNRclv5UxDhF8YrlbbF1UjHyjeOfcgx6dFptzP2tuxyRlrIi7ixrtQY8tjA0GGewe%2FNSPMAPOejNK5yysptTRTsSj5bvGBtzNhh7nnRNnecEbisbPcc9Od2XQZDdb7WGUrLK%2Bfxu%2Fe%2BAQNzS3ICwJuas&X-Amz-Signature=39b22383b1b82f473ae171142d22c471736f6b5b9bb8e64c85d93cb30edd278d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
