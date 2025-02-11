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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSOZ3RFB%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUgL4y9eA3iXYRqyHOosaMCcJe9RjRmRctDdZ%2FyAzhpQIgWQMRFo7Q5dRDbekmO%2FxlUQoXzbDIsQFbtddxXcTzoQEqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCK77BllcVv4aq0pNSrcA9MzkDovxXvqxcMytpPyyioweqniythE82e00OFnPWjo7wPXhHsnpTAohsdnHVGgJ3QawcYumCCFO3WwZyb7mjMbp7ivwQR53JYiyc9ah3ZhkjyENGm5hQHJqmLAZriScpJJM3yy3AgANe%2FK8zGB%2F97%2Fe6mw5Yxi6IEXTjSvwt8BfNUMdVA8Skzuzq%2B57MB7kBust8sKdG8wOpPg%2FPGywpzW9Ox37qXIX05JVv06NQIeFRy9KHv2lxNYU3ruzJFzauNUG53V1UxY%2BHCRR9oUciDKwZvH0PgPLsod%2FeeoebjZqlsez0mhYHSL9o93Q8TsgEi99WbCx%2BedwXgfqpfTLaQmkYD8AEXgXz8MaEOBORSfm%2BcefedD5yHhpvRPYJ1UbvpdLwy4yat4khBVnlJy9RuSOsWeW6NAAnHYG9tE50fQ3v%2BRTHj0zI%2Bfpr5J27xQtfWTLYqlcRrUr7kiKwOaTLIlPVY3tU9Twld5Qk6mBF98flpnNbODVZ28l99DNS5moWbDnuaidPA0gHAyT5ldeuqIHNWeBi8EyQnKCCQkztP%2F54T1eIEAbKNfld%2B6fNW12b%2BR7zdNlnr%2BFwcrf6fV7PVPyZV%2B2KmHIZCeq8AbF%2FeGGD8jUne3IXDsA2RWMJ7crb0GOqUBPiP77BZCzpT%2F9SOg81vXAg0jiSa9cdBTtf144suN6GJSACFujnyioMmU5BPnXPzQTAJuv1FkGNvRWDpxGjRACvFZ1qr%2BsMcP0retRxoA75fMJrItc8R9SL27DHz4BD0WKftkrOOYIEAdryRC9MnckiK1yruBuCdJPx1DYMYAqVBIMpAHzBAz6vEARkShOYzbET%2F2ZhA1b6sUtuM1fD7303a3C2wy&X-Amz-Signature=f5272e3c7259316dd6f65ba889d60a24888c46b746c2cfd91aaffa4cf60ec6c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
