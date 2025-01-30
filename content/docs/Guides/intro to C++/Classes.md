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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEBDWV7I%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T090751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5SnCPjT3odR0Yxlt2Y03ug76S9H2CUaUNw%2BIOCqmDlAIhAILE3k9v%2Bs50xQo4h3rk7TIhFB2BFs%2BRwqTm30OoLJLMKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjOwwORC8t8lsT2oIq3ANQ0ib2eqUfTVPz4nICTTRiZOm6hNKr%2B1bff0lEqUnmfO1o0PQfly6A6b4CMUEk74ct4EAU%2FUE3%2Bnr90%2F0oYv6R4N1QwcTNn4YhzwBOE%2FNT4hocyVhvtd5G2kZsupXdiWbBLCfUDz216CL1c6Qp82i0%2FKCGFnyQ%2BxFdmv1too8txG4Mt1T0mHOyubeDg8M4aCjtYmGu2aWgiex8M74VTwAePiwoszSkBe4U7JDB%2Fu7vo1Silkv%2Fk5jxB5VQa6ET0gS57OtdgIUr%2FEB7DYyKcUJRDSnL4tpJOYC7M0difZYQZyECFRRHroiTrTa%2BgbbhmzPG9XseQkS13Gbfd1yBM4%2FXMT83W7z2TdrlLRua%2BcM3%2BkteBHejNc82HWLDNWMdzChP97Vz9I09yK%2BrxIQm7V%2FS00veVZxELvKhKirLxdFLFya69W2wcWZ9gWR02cqo%2BhwM7SORKizSmkW76%2Frx78LIzOYEJHbum3%2FTxnTI7K%2F3YpLdHo3q7laPg1HQzrzx8LYBlfjuqv9uRD5tv8dy3lOerQW1PH20k2AmpHcHa467sdTfrlMS6vGHbd3Tb5iDsPQBBGBYAIXWeN%2FBvW99TnIwbnkKomSxQZSsrm4Sa7TZaAZDxJtYmWdaqjtPWjC57uy8BjqkAasLXC9%2BHUbuoUYEq4swG2XyVcJU8fvtuGJah%2B3SrjvfH%2BqvPTz6ATunHykIALkjNrcHnPi9BnTtlC4SjIj3%2Fc0%2BdJFhg1Pr8iunnG5q4vbSO61MP1MRxeww6JJGtxW7gKB%2BaaMYqy5RvJ%2B8sZgtXuMpBsJ8w1ALfar0%2FB2qSJ%2FIrktNoRlpZeRFJSHfomWbD0J%2FX%2BZu60rX2UPjOYMyJhu%2FFZLF&X-Amz-Signature=c87d95fd49e4ee615105a457d22bd644ada74c2da7229c47136e6d904d8447b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
