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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSWISACN%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T190203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDFeaWX%2Bsnz914xhdSNYyWIXJ6JjWbVRbes0iPDFIn9IwIgHvwBeWyaR3eSvJGvoTpGBrC5Su69ITfb8iHW5CbMvwYqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3mdwgu3CXS1lcziSrcA4sIN34soeS8xC%2BMH8HwTEi3u10cMNnSyA%2BPb8zAlqOK6q0yuhcPZLKC0mIRBUgvCB%2BaMty8vi1NPL4YXePXIgJskFUuuiw2mS7dNMyLUgzTZjMA4YiMmPbmX3tlgAJEDVQYuzfFTdX6rJ4K%2Fx58apvoFbRAZBc2wHVFrJdXDxpxw%2FhUF9Az5QkNUoyea6n%2BZOZiaAIq25jAid9rxytYujbKU9ytcycH1HKST4r2CtXdANT4o2CxDlY9BX6D8ilBPzGw9gxpBYS6RU9qNXrBIlaAHRF7%2BSeAoehdKNm6MfuI6s0siAKilLGBZ8fKhT8DsXLKoYjc1bByLugVmOyO1%2BXsvwP5kiJmqUz7p8zWVYsMtnXSnVYJRyxVF3TH5ZjTckwSkgiojI2drkwjE3dcDmjoV8qwc2Lgqn17Ngjaq%2FN2pluum0Le%2BrKrqk8iO9ObUhl6h6ytd7W1nrMI2LB9XjAqbP72C4%2BjrlpZ2mbLMqKLWEBnuSzG%2BSgqtftgqqRgpMKr%2F2MAdUTlLVzE2HpCKudBraB5gt7OpLSRCNDsm9e7A7obHMPeKmve5Z73hJgJ3i8jQxfRobNNCH6VFW%2BEA5H%2BW2y1N2WCBkZE8o96i4jaRyKPI6eeaCAL0U%2FPMI7%2FwsEGOqUB5xRW%2FoEzsL9SzTTQPMk2atzkqgyqEBuL%2FR9cwqDcVM6Sc0mThMvI8BKVZ7nR1xOsABm91KjC8wt3TXnjB7XVOHsZgoD9xuX18Gx3%2BUx5c6AgHIeXG5drH0s20Cf8ZwSan%2BGJrGPB6vPN2gTspBwiwKjirojAmeE44Kmq29Mr9C%2FXlv%2B07zRBrgrDmewssc1u3LyactAmfl473%2BobYcdi%2Bmr6Vehk&X-Amz-Signature=3249dab2deaff23dfd2ad1fb611a92c31bc414bcd6e95cad2ada8c13bad8284d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
