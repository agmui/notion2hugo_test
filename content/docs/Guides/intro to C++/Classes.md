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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PKKMI4L%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDKaqKs9QI5qblm5482gwHgff2h2rr%2FEXxf%2BEX2pmTn5AIgOpi%2BSplBbhhUTXnuthm48bGglMf146kT3tuZaNBUGwEqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHv55xDzbpyAa4WafyrcA3wBB4fbuYoZSMBnxyufftzOcVRlkACSZ5f%2B3VR8DVmlfiw236CABxMNNI1XFS%2FGKEgRksATLGwS8QmXHZW1CYBxUUz60lEmiZFKVxvgFc47J1N%2F1aqiV3HsgwJod1j5A06QgzfBvlCP8o5to8ylvJKYr92Y8SLMpTPqO8UlRWJvyL1gahQbHuxRcREDcRwWxM%2FpQTG%2Flpy8xbZxneCch9cv5u%2BtCasoQoDtDcqDNbeUT%2B%2Be9G6jyjDL9If6FvwJLQZPwrBrmhDXFaLvM5Qjv7bmOVo7M41dAx%2FZ%2B9La8WWQ9%2FI60vHhwxeubhaeIMtG7AYYYAlp9fqplIua6ekZhnl7cxp0iWGtJDLJ3XJwIotPYbGHlArz6ZADwElAVeYm3s28LVavSmuONa%2BIZTT%2F1RNryrL9iM8dyDigsuHktDuiNizrDY2gz7c4Twci3fKId6Hwb3Im1tfE4EB06QuPm1KiAM%2FHfaGaombHdQZA6gNJHv98zW0hvTurocKSZYZna99CBwwX8k63L7DSVs69A8lbnmFFWmlmjUD693byMxbyRVivTfRQ80qRvht19hZK%2F%2FMIDOwdEIl%2FRbe7dBoTGDucCSu7jjT%2B0fFAJkTbslhDmtfMDRu8%2BPBf5kwjMOn%2Ft8YGOqUBvBookI%2F%2F9eu6MhPjpJ1lKm38S%2BTnKIq4FxojPfF6E%2FQWXZQc90IUGs5LjlosZC3OAkWr%2BElNhN9KxXejxhv2ZY61M3bCOrtpiow4I6tQsAaQQuUscK20Q%2F7IvgN4XHL94ukhgy2fgfBeTTU0dFw7UTbLIz690Vy0bs7nmnW92WBIdYqMmHoCLPuro3vFDhjRjzGB5y2%2F%2BJGEB%2FTP22XwvJt8OVWJ&X-Amz-Signature=a9e861ee82dfe486f2e8146eb673d29f729560887cedecacb154cb7be6d02c6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
