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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRCCZCVU%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOOgwy%2FB9pne6yHiZvzD16d725gelF01HEgwbDPXWTCAiEA8S5Yh1f5J9igA763hpGYP2f5DO%2F2pzdayU%2FMhtLFWokqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGcM%2F3xLd4mL2E%2FM1SrcAzKkhIpWiUxvcBG1JEXNmipkt3fWxyiYswSACfrr06nHPOrzHRJB1kzcdRaBU0QOQJkpW8YuckOZS%2BXD2%2BixyIAqpcp8ehWyGLsRyGSApR5BXjoEYDwm1e32tNSjtQGwBRT5NyM%2BXTTnis4c0CSc04v9r0omiZ%2B2Pa3RJcidLK47OI530Vhbj6uIrXYEoc2xEeplwq%2B89tW0JyP7pLLoRXpgU8BoPzM7bhv3X6aE1LnnaIOd5WFdtGGi%2BaLcxIr4UezozfQZ4B6ACzE3d7IhSYSTiXqKJq24940y%2B2V8Vi7HZ7Y3mCQ%2BJAQKv4Hdi4JVbSNkELfvWh1%2BNNIuLmNDraUROAtL74uBZSNQQa%2B9N0z59Iq9Okolbif1jDqBYlWAtfyDxLfKf1ofK6ozNcsU5GWwt7E9GdAt5Cgz64gJGq9AhLZGpsb%2F8YHAymSNuGC4WbNItElQH3qs%2FPZ7SUCNLadChJJFPsfG48yH%2B9MRn6ZufUQwkogIx%2B9BY%2FmSGc9UwQAj7TM3PMhnt6L3YTzM%2FFTA9bzgiwU8g3mTKtaeh1sPIRU9CItIrafFtCVw4ycgtBY2weQq097DpqQvlRwm%2BCSY3qDYyy9gM1vKqiTHLNMCM26dtQs4ouLmQe%2FrMOGQ2M0GOqUBeIYVACZ5GZ0GTLhCtKnN6u3yeqHZCHxfcWiQgKsW25Q2ffmreUzrvpkEeipTkli94Hx%2F0N4Mk4qU2%2Bc5x0zRu0H0nHb0K04yq9xF6fiaS%2BWZroowEVmAlQuACd%2BjdZYFpLei9ZmxxkCETzrzHe7RfBQtj9QzWGxW7KlM1L1QFW0vb1ol7jCNVckh8oqDCkS06FHqI%2BP59qWMutk%2Fta36zR0t80tb&X-Amz-Signature=de0aec0c127832555bdc7c91f6140c0771f2895a780b26bd681489bc00f8a794&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
