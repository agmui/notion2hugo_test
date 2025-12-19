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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRMFMKJP%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIjVLySuGA8Z4%2Fvyk%2Bbm8P7HhaW6xEec3M5hyMTBboDAiApnr57DKpYBTygokTyBqaIyDfcpJ9fsfHEHqMV7T0GoyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA0Y2wLSQdubPmDd3KtwDeMK5PAqmnmZ3RReU%2FHPWByCcApP%2B1DZqrhYhXIqCVQcnQJSEyT8c1xx%2F5324zCR1nXMNAn6sGpLWAkqw%2B8Wxzg47rsN%2F2FCEBOCwAbQsqg%2BwUrQUKHO6gR2f5hxvMTUbm%2BXWw31XNM%2F4OzTQZ6ZSSDcvAt30TJedW%2FP7rGtIpGrw5ZhwNs5BcVvabkHLn5dRi%2FY2ftCI5ZINMlQObXJjpKSs4JTsOuG%2Bfcf3HpZaow5uL%2BoblWKVem5irWSA9oUT2f9rBucdl4Ap1mb1%2B6TtO2jYlyg3xljLQCoDAuuqpQ7jHeucQpxOVi7lqgjlNKu5keE%2FXD7%2BICo6Y2X8nAuv5cvYW4oXwVG5b5ta9cZ2hz8hI8KXVRkV1HvODtM0ssf7g4Hpfpv1gYsuhu8dKj9Ng7PrwFu29WWE0FJG%2Bm887T2qeRiNR6qTtpO2YzZreXlfzUo8Xk1dUQgcAubKW6Z9l4Y040vWOmtLEoLdOGAqYRoVpRlqPX8ON3sQz2LLHJMO74rLBCwcftfcIrI%2BcxVbtqlAf5b8BLZfrkdUQ4RO1qa7DjDX13%2FCigw4L97pyFvgMhIjQXc4aP2quGRhws8FLQV4pAEK6d8tCBtNq26MQQTKBYKn6ubCZbfmNcww%2BsaSygY6pgFHCHWbI8hNEpBGe9om6Rou3f%2BIF1Jil%2F6lJGXVvwULjbHn3lW1FAfH2t%2Bpa%2FDEndLK%2BG6YP88iNbS6ntUvaoRshAz%2BbX0cTEBho6Pc8VPgZKPymvj7KTs7H303AdNyhCdFZ8ZESq8ZmUXGgaKGS7n0rNP6Eml2dnhItauULzmfbbASiffYDFykQs%2F5JeR%2FYhHPSF7v3dag%2BrEbURrsPAk3ny6yOJwx&X-Amz-Signature=30cef3fb7f2d0818c7adffd101a053a3377daae4ff6e14d701b25954b22c523f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
