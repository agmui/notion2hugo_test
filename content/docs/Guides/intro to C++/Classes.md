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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ICLVK4I%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T190656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAT0GGq8N9HUnkFrTO169obyiOZW6jKBIdnHBxmQwTsEAiEA%2BO6exuhdMwr52xd1fhXgMWTsJAEm8h2A6Wq2HgPOmG0qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9mA8C4UdXOYSUU0yrcA3p4hkUHzjemoE56zUReN2nlyQpGgY5n5TEavcbTjdpfsHI6b0e8cDlphezx1eK89TauY97EJi2Xc%2FnC37y2YzyqXD8peM0C1LW0sI%2BXXzeXT0phLjaFl2p7QfZ%2FKi4mUTIf3p6Z7vOCY4ky78GrXaUYIaM3OdDg1iWxjwOk38lz0iID6%2FLeFEuyjrkr1AqJF4DP6eINFPMYfg6UYV9WhOoCyX6ORFvt%2FrF92BsMQKSW%2BABSt5wRhdnf82523aBlywrK6drBQ8%2Fi92Sk0NBW1dWG1wVWnlXMnSYk6QOh1VtUfCTBPFm%2BBgfvODk7tdxGXRDWrX2bzjUDyghOjNoThSYwWIyLZwi3X9FeE4fYZwkAYVZ5eSkLUMsXHQKhoYyw15ciRCxdkwpsH%2FdqZIeKCtYlsUaOtskki9zjO1GioTH4VRVt2EYqDhL%2BC7M5r17fhsfVST38Wa3qkAJ%2Ba2Ff0auRH0kLI5d8h%2BQa5hZGSsdJDcDOjKd%2BRJ%2Fvt96tg8O5rxlO768qTz6Orc7LlpvYCB0%2Bm9PXPX30CUDAbPUCa4yARKoAqAs39UmfbFPjdH8b3ZUzIbRdZok%2BMvQXBRzWA0njX9520SGUvJdooczzXX216qv8xxrlGv519pLCMO6AzMIGOqUBKDX6u82AMS2Rt4iaUSHRUp2rrQv8jIoIHD8CPoWGJ4Zoioe77IOQTMljQX5KMPXtIkspxVVQBozZ1lQjwyoULq6pjEaGq7Bc1na4bUuZaJJlHlfjFiOoU1htksQoZKzzWOIJ7cwga2pj8VGNi3W8tIOaelb6tSrIUzlhkB%2BRmDkeM7nrvET1Ax31%2B5gGxHoUty3UiwsjaOQvHMHOCMtLegek7Caf&X-Amz-Signature=9ff5058f10ec16937dfd9cf9f2168ad80bbae8a72afd3b379c22b8b9d88461e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
