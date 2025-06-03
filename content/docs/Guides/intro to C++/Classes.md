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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIN2R2F5%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIGlEoITh%2Fo2In14yfbCjjAOo9qOSSVKfKFdqMyZqLhiVAiEApAu9%2BgP0W%2BbSnfMGBfWgjUblZ6JVg52HEBxVeYA%2BeB4qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSmsxU%2BaSo6XEQP%2FCrcA%2FAg2FMs6y4YV%2FHqQk2T3LzWNtM6howtFgr7%2Bw4lAsnbcZfgygQHOkhegN7zM643zitir5mR3529vdOXL636MHSbIZSO1iYkHDeDSLP%2BrWaZf9l8rH9vsSQ%2Fe6ukikUOZRV43TRtwMO%2Bens80YZvKf3uletokquDO6MPLe4auhhL45uLisQnYQMwklBpn4CvkljObalYhNHZdslaFF3sVH9yMtoK9abys8aKVKcapCT1uKfNFqno12iQAXBq2wn9iQ%2FAYJkmtUTDfNfBsdfr3f2ycnS1gmbL4AhdgjnXjiexHYi7u3g7%2FxumBrX0t%2BV4DtsjDkIenVhv1vz5HunteAg5OwwJI5c5riC%2F7oaEtBCKeDywmCvv%2FQ%2FVDLhu%2BRPzQoNPG1AO2ZHEsuZd%2BjxbfDvmobad8xNPZai3wLPFLr%2FyGiHXg5MRW%2BjF5KGpb9FQgqU8ia6b5XG9CL%2BDT%2BizNBoIkVK0OlXxruqQIEgOlO8wJ5ZCNHB4jfesgOGdawL%2Bxq9oG1QkT1EfI0YlDgl7yp7PbiNl66KsCcCATZ9X85pX3ZDu4%2B7A8oe3rAoPo8Q9iOydWentsKb61w32LHMSC8r3lM4KNEvcT12BkOtj76Wm5zaXuLRsIxHVSsFxMKnn%2BMEGOqUBa0xiskwTMhR2io%2FWPHfxbjuY%2FyXhI2XFWznbYRhXrV%2B27AwaL2q2Yvr%2BMhilIaHedZ5XzgBLr%2BFf787epK2r9gUkNhRe%2FkynG%2FAXFME9ur9MuMAWBtZf9RC9FEsS7mQ%2BjUYUpKz5UHMeikyQ8c6qJVEoIOhFluB0VcUlb0AlMUJsavPpIWgNfKCOVBlv6X2nb3%2FQgs%2BiIhyl75xXMb6YGarH1cjJ&X-Amz-Signature=4fa176f173f0c0069316ee85e7fdb14e15091b1ad3d9ac7415d1a651c309a777&X-Amz-SignedHeaders=host&x-id=GetObject)

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
