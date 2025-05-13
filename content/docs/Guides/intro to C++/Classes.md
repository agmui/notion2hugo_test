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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BO6JJPC%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDRjcL0gSYLK49oJPUEEnyZOKBkPq3E4jHTRywvBrGD%2FwIgOLUaJA6bgRqf4r73mNFe6RxpsSngaUCD1jHshCcIkCoqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCWyEp1Wv%2BUjUrQKSrcA6H%2FiquNNV6yoVRPCxK7lryNBWr2NSX%2Bv7AFti%2FmoowupCW0JFg%2BgFEbH17u6XGLLzmzkklY2gZ3SCjWSF5Z1cVLS9yqZoJk7nG9nheh7Xe1oyVmFoj70dazocfNezmJ%2BR4NkLZC4Dqz2fLD8fzFlkBvM3qiEoZC5CADsPJiYDoc5Y7y%2B7c3IXsrWpDGyoxt3pbY5Iv3jk2ObsSCHJqUfoZQ9BSJKUQxDclFWagRs7R5a%2FuRKMW40uiEHDrT20U1S0lqtdsyYOGzgOotevevRDIP%2BJLnvKuUqYJptq%2BPNxa0jzU%2FEWj88G4YPkwZnkM%2FrUQEj%2BPSvJ007UgmGN5HcHdJsXvmQwSa5ZiA4VLv4KmxDD7mmK64244kBU3aX50koguwhUTMUkpfp2AtOV1ETPpRfYNZ3jAMvX4fMAMha2CxjP%2Bm7DjOTXfS8iTH%2Bu53g341UqiRwl8Z4wQTe%2FPBGbbLW24epUFCaEtB1FGILArqJpw8XZKL7Tm9EG%2Fnza4KwiPRXlfscTzRqRDiApD8vXDZ%2F3FnkKFFVV5icJ3dtEDPxu9Q4tpVWzDjSK%2BIM%2F%2Blbo0nB6O50aVAMjZGuCVJJl%2BjAOntKHfQUOrOd39EMXwfqNgj1IIFprqNSRc8MM7xi8EGOqUBXNLD09Uu3hSYHr1Y1EC5RSB%2FPIwf%2BZjrD9h5w%2FMBFHtDmXskGxM9eCq43BF22ok7568ofCxoUaS%2BpoFfTs4Jpt0LFQ0qbUOeyXvQIovPmFDoWQ1l5EcvHWMaKOpaWROcfYyPi4ywobbgNIsB4TmeVjvnJdlWTXsRbXhxQ0zaxY%2Bye93QtSgSIAi5AJtcYdQxFWJCFHFDJ2r1X%2FqrOgB5hsOw4SgZ&X-Amz-Signature=a18591d89e53d0f70923f72af40e9907efcb4ba997b73daf26e7ebc7a8354a82&X-Amz-SignedHeaders=host&x-id=GetObject)

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
