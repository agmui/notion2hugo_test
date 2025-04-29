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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5CPMJHE%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaw0%2BUMpn52hx%2BK5hYmGYE%2BzoF%2BRcaPbfL%2F53Kagc8kAiB%2BDFihHFeTucg9bJZyiy%2BwDW%2BVKg9df8rw6txmIqOyyCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7eig8Bt7rQ2rOPZrKtwDIk9p5b5x6nbJoRJs%2FB2uhP207xhkhBWIwe3xIulW%2FPCyPSOUEojgxpgMeuh5pTIxB3sfaaAWVPebenLc%2BwuKl8pX91EeNz3%2FyCAH9ceIDPQZptKoeEaCOIOk4V7ssellf6J4JBh%2BnGL2YVSeX9vx6gIvwe5hZGyGZgX%2B6FqTkO%2FGDPlQatoYIuQ%2B6JSh3i9o0qKHxDNTqiONIRY%2BkqFdiWMkkQtFq3eEsO01eCr8ut239QurfzZTPMtugq382BYUt5wG3rEpBe%2FipOV92IjVOc4X2ooaw39y03L94YosDNIRXdkCShZ07Wd56pFdvwltf0dzh3XSTKxv1emeK0%2BhnIQQ5GfC17CsR%2BWQM3zLM4CxW4hKb1GRrcAAdgujdGPMatc%2BnHpINO23dbv83Xw%2FK%2BtLXqh2hpAlvrreDDnjbZ%2FWTdLwcZ%2FI9e%2BP0zZXNLSsslUdap5O8YlBOzkt%2B4Nk2VufU4fu1lFEwbXylhAevMcmCpzdOo1kPF1uw%2BeN3GAJW8JkgPVgbFUYzyQ%2FP8ssBuIcuwnOFxWGxPMEG%2FuifLJs9F8HHYixf8o7Vu1MWPJCih%2FhS9mLhZ1obpG45tvMr86bArB0YBXfRerpzmgKMH7RXrwl99GoKIBt1XMw7NHBwAY6pgGWEhQ5YhbyUDXEhvC4UA%2FxqTki3ATPx5aM7Wxc%2FRMCXBcKfy%2FO%2F4j14Gw4Z3AX2f7KuF3WcsMKsv97KTjbf%2BY%2BjnWhnrfj7eLI20xbWKzMWOn3wzxyLwfTYraelwAwBhdZTfIrGdl0t4TKGb5Og5uOcqLTVvGKdkElOhsquDPww9cEhSzLK4LT8kgJvJDNzbVoDEfRB%2F0HCqWaatVkubx5a5hhAH0q&X-Amz-Signature=de6ae4cf6654bc189e64de711b12e62d8837a88da7531b72fa24c80e826393bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
