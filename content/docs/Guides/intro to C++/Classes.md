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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DN3NG3J%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIG%2BbEYknZ6aZvlY0OHIGszw1lg2EKT68AZfuylKizFnEAiABzjmIthuTpqKSWu6J4VNr5DQwdF6vS%2FGDgoyDwikmvCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwbeyu0IHK1WlryGLKtwDv1bEKXNLfsqiQzEmBaMoJ5tXc%2BFJ9ryFDa0vSyrxaAwr%2BfaPh3vuYRjtN5DBszwqHHuXGe1OQ7%2B3TyCAtJSMzV1N7z0RA%2Borab83vGdPWeFlpqwDxDPr6YaQdpc3lIcBNhH1QpUrJ%2Bc9E3GLduazYChnG63zvnJYExVzPEUWZ9IzpdrgD8ZW0Az2pVVvH24dJKQ4RoFsfUPGFhqvq2df5xtKaaTlX9jCqB3139u8JBCsDv3PBoccfCGVGJ%2FT3CSe9pKDUh%2BiRkvEbTVunxAqw0wco4SJiRnqAU1btpEgWP5PcCaIqhlx5dmXx1peCcujwFqBjSrBdXF7GMruFCOmg0MrFeUeeqVPHfTqHJaUojG7fYAC%2FUEu0nq1%2FpEDBzA84IP4tZG4rg5JBDNKsuODoIJx8pz7vLRfVODbKYG0FgqWXPojmrT2qrB6V1QvLq9j5w7YtRRFCbaF6HJZRmVYuNr6V%2B56S2WFb9HjpmGRPgZtaDdn2KE5pv9KXUwldTAscDNv%2F%2FyuN8LGhGDgr23IDqOVtNwpoN6ujkQpUbeCIRiHF%2FyHCHfvCexlAw4tZUSAfUC5RLARIfM6xIizVY7HjF%2BPgDUiDliCwKOAAJJzcbwNHGSgXbJGMZmuh%2B8wmNiW0gY6pgGMqDZc6z2U0CRTmSZPZXDb0vL7E1TnEjU0ByudPg78jaCkjvImOAgsbLeU%2BoYrqIvD6q%2FNpxZCwVK%2BHHq3IC%2FAcUsJlH%2BMj2PMuOuaa3LJrzQRGMdvif%2F%2BGnssvu9nG7jtVlQyOJ0rwHcnMCqaooDMoENg3K9lAC1UC6dp5NoF3%2FYqBrI8Jbn0mXmzXO0Y8yqAKKsjFSSZ8C6dMnaxUUP54v5rSQvo&X-Amz-Signature=4d1e009ea844ec26c4582972ea783b8f5df68fda862c37641365d525af100a57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
