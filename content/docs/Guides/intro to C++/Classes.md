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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDPANVN5%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T070956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCzjuwEWGY6IIwIU4lHGuUS9fQw4mXwCiJ42%2FWwDk7sFwIgdRyxbQks6OP4gucxJGzqFtzaUkAo8FAxMA%2BQYEWAz94q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDMHgLoXN4zyQ4MOazircA%2BY7n3v86DkeBllDoFJG0KCTUI%2FK%2B1T9zdrEPCvrzOYjn%2BZIVU%2BfVYr6zsCkKgaYPGBbTS1l8ZQD8dQDb3Ph5OMb5SjF915exMZ1%2F3Mpar%2BBJT3uPNTxVs6e2MviwjXotu4Hzkp4QQTAfZVLje0%2Bx0QefqDc%2Bpt%2FHjMrVaU6UeTs41Z4IXBX5MDEYQTfVk57rux%2BCvwONY9r5x1EO5sy8omYqZaLhei6nBtVIbTqW6G%2BW1ilkQurOIj0%2BK75pV%2FalxKcIAMlFdd94tjqO3l3TKkW6mnB1SrZUWvhKjmYOZ%2FLPHh%2FEvujLUrLERVLj2bhPZtbTS50Y97v%2BUi3taFzy0u6d9Ur9RtuydbecPAJS8jmBBte03HQ2MUmNGuImnGmLj37fRCZ3PfIm3qddI29rettMqA2QqesHny7B5XSlQ37x10fpr2utaa5PKVSYw8%2FsUGuRgQ6ULp3CmumByWokLW4D3a%2BJQqaOQcoTc6r75YTcuz54bI2fE2GbqZY6xPS3M9zFNUnoYCHGVADLw5Lgfei%2B2%2BqhMv1hVyK66K1eQIPIQLIE4xLxB3O1%2BpdTUvmyIZEf5tr%2F9v1kDNPMQ3nBtm9gTxGrz6buyko74PdGisjt%2FpywxqrxKfxWj6GMLDlhMIGOqUBrMMJRWIVVziXMz8A2wtSeOa5i1AuN9mg0XBIYo4pw2XsqRqgolxCYysoytg3HW60w0FFnCsDuTEa8bPRP7xH6JnqYr1GM2rioh1F18wMHCYTflgapXyN5tze%2ByaMjVhqVYItojNObeyhUak7w3u3VC3htQCXOnzFD90ap%2BtUsSGle5isATf6%2BXNUy1mo9WbJRheOKfJZDiQlPfjWZ2p7LcOe%2FrNe&X-Amz-Signature=77bf6f68f3d57366df2cb80f1aac1ae0cf38edf4e6370aa952e21fce65963149&X-Amz-SignedHeaders=host&x-id=GetObject)

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
