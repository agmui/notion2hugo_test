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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZLS6FZB%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCUzHPAm%2FUeneEBq0tQH%2B8xn6I7QdbzW1cmbsV9kb4j1gIhAOtJOcNR2ySGgqAgyHELS2aAjylV%2BnnGkIU8RL5F9DnPKv8DCEMQABoMNjM3NDIzMTgzODA1IgyTDUQ7S0i62%2BNdM3oq3AO665ccjvbyl1fYKHv76k4lnnbInW6tno7f4G3w9J0YuCWcDZw%2B7aCf6b5IZaM4DYPYhqDnebEYTSvw%2B2oPXjBu4fXrcDfHVk3q3mwD7lCy9vX0zaZx4G2Qw7qWdCH9eRAxiRIH8duqpyeF%2BdnaG4WtnMl42cD%2BiDlPky5wsZ3GCiRtOCYRD65FB%2BHb7QapWRvNZ0M6vMiweNyP0ayDNYIfoxxxhTAC17H9HCgx6iQdYlhWZWN53kJIHYaAfRX2us1LwsPWLRgfCPuQy%2FuDhr67ivLK%2B5cf3zbWjX%2B8AIkT%2FP2IA6%2F85B16zWJrpdyeaPRcTXE06lKMNIXroOQT85JRcWxKQ4r0TTRUZBKyYv4%2FHI3FC6pmok9aetCn4xzrjjlCDRHoAKcyE8JUhLTk%2F%2FlmM8fDZ9OrG7uHMhiX6Gt%2FBO3e%2Bmemewuk7hVo%2FBPM0ad1quL%2BG84WXqFsYpTkShQmzd%2BgV30KTsyGDo2ogNyDDIBCNfg%2BtyYgh4H6NMfDR2QlFiavQ%2F3veBLgHThw4iwxkeqb2%2By8%2FGVgj%2BcEjq0miCKa7QRaEEocxNF26BDotd9qq5T1y2XKKuCxuGjKw2NiDqFIsvpikj45rDOpbIMdJMi%2BKbkuByryT1QYVjDC34XCBjqkAfQubbkjKy4h75fpSVfUBDvBq9yce4EAL%2B6bd%2F%2BkbFuG1DWcRuzfRv2RZH7CSyY31u0rl6BZw2GbZ%2BeSkqM8D%2FlxTEvLK%2B8%2BkBb7hR65hBvM%2FfzUWfbNtJjSd%2FHY9DJiUBwNoVmkGLDtUKfpQmIsJMzsiSdpOwBIIYMUuQjtmfrBvR8PrOFhY1KvnH1JdtSc8DZlRTDLWskivZqqiKbWpTTUrlFd&X-Amz-Signature=3b0d9c781337caac98ee8f7169e041baf477bedbbbb5590a8b35b36f31bdf884&X-Amz-SignedHeaders=host&x-id=GetObject)

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
