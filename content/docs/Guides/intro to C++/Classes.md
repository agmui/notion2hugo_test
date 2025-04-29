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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FM2NI5I%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGXDvcfm7OD63x9gI1JPOFI82C6eZqTYl%2FSV38NuXrRgIgBVUcye1L%2FRg5gVZWzk7ZUvJlPJujf5adIQNGsnGZUwUqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBHEBe3LOfWLbpBoEyrcAwowC3EMja7dyQHnkR7k%2B44PqQn4UiHawTjUg8tQjoK7u60it2dqj22DZ0R%2BVz74Y3Myh2a0HBYxPrb9hKhIAACr8L04%2F3EwyAIvbgJezZjCLaXQNDl8JdRU%2FPkbrhoMYzDaQeoNXQlRS%2FshqZPUBxXdO3T%2Fsh%2FcfxFiNHQHE7hOvZqv6ho56eADbT6MlwDBISWQNvwmGi52NDXEN5Hgm1Ze6j7faYaN6RqG1oPu0LlRd2mpzToSSPwGPwcXDfr6F7acZBM4TnDsOpQ5yqp4EpVofoUhCKkiMyih2jT9Cx044g61hLi8eF0vR%2F2mFUnnUT6HkPT3BBQYU8ydLVAzHwsZGjluu7a2pmAia8BTBKC51J%2FyYdFnhb4D5C1aLomqywmzgv2LXJgk%2BdzA9BjDjm3dYt%2FdYMVO7bxJqUkuwOdZEX5nVIpGf66cr3si8PJDiND4zTcg6cozeeXj79bh1RThoWsmnzjWqUw8HbqIC2OU0AMAK%2FXAdBwpnHnjonrz3ZIDvNdRQviKpeguAt7o8ymnJuv%2FYsPx9bYqzYOJHDMWtFK9gzGkx1IWAt6%2BmSzp8jpr0BPFZMV1kMvd4OYozFrMOA%2BbPkrFv24PqzE0X2jXZ7lgwIHlg6rrcw1TMIfPxMAGOqUBMln0jrwBETIp6tg5yt3DASWPqIYE3r70Xw%2F5cBF53O0tD%2BYvkzcqL8ThBsE3pDEva4eOqBjmoXMf268ZD1tR31K90bLWoRwftHJg%2FtWe0roRoMD1zu3b0B%2BV9tzSyyWbBBOVUR9w2LTMBtG0F0l1yLuAp9%2BOqT%2BhHsGarCKazkXj4XMvCgwEbs1pbZ1cGeoD%2BtZR5WR98v1ye3H0pb9J%2FB%2FoCU0n&X-Amz-Signature=02fbfc7a64dc0e72c0a011454ffe32fd02c9c9599e932c5e0489cbab043b2980&X-Amz-SignedHeaders=host&x-id=GetObject)

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
