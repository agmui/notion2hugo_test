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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ERHCGS%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIHbHrMfYrB58%2FM4%2FDbwBHhJzGxpohULuJAZQgUdWkWnTAiEAuQmGGnoqINoxIYPmcOtTu4In9a9TvG9a1Yw7DqJ9o70q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDK7aW8Pieg06VOoPICrcA2Vfw1jJkKSZ8qgoeGuDQcdEPu2XDtA7f4RiQihEnbpx6tT8MuFxeJyx9mr7H5CsDGufTKN3YXwh1fwVTCCjyp1a7u3GEwDJ%2FujJa5ktxuAe50dBW8%2FceJiUYsavn8XCnYnB8X%2BuTSxhStvnGnYX%2FtEfUU%2Fvg3aGnBl66I0Oq92cnYeRokZWeTz%2BZKmCuGdaS0449vZGWXEmfWVyxFxcSOsAfx%2BYOG3UcImFhOc6ZPV1%2FbQodUvOYEIZjn11Mk%2FFJh9OaAvPa9Yo1X8HN7AkGjo6JEPtVvLD2anTgeFZcTyH9yW5kW1FvM34H3X3185hbTIubaq%2B5b9NJPancV2Wx52BDN4LRknZ7irt2OqXcsfzggrJ6evoOGzRSc2WGTjPh4HzhJpqis0Iz5ZCzqqCn12vBpptdvtenxQYq1EehYcP5%2FdsbHGVGGBZBHTXCeQcQCugtkaiEgsiyNxvck77O5S1hLc%2BbLKgIp3LSbeVJY%2FXeMr4%2FHkrRBip%2BE4Olzf%2BMTPu8nJ%2BbJ7hvT0TH0KWPkvGdB2frtlBtJ4eh3vwBndjgPvlzdU%2B0uLShJCQH4Xn7yVxa1fUKpzZ7Qu75YurXe0dgGNCwYGxq8BFzbb8%2BHGu3YwJ2hK6Mdv3cNUmMNeXscIGOqUBYVCU3FLibRziB7rlIucHqeONw4tbOixSLHOO3sS4VjU4HjfCOoUo3iCai8wSmb6zOxet0c2qIWVgiDxSYQflDAcYmVWYeLV10uQx8C%2B5hzsPryCWQAJTEyB53aJOwA42ISiyZlJCUVTgtT0OEQOBGizSsscVZ7tAsN1qrQ2SkvZlYpuFod%2BJBhxaoS3WpydNK0vKt86dazF12c3hAzHdrxYCvQ0T&X-Amz-Signature=6d65f138874bca0f5009e7133e31f001f6e5d77a15194cc72103dd0cac93926c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
