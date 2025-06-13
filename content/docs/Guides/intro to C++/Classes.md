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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4X7YP5X%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCtodCurVFw1YXw23DVzCRmXe0qamfWdGjFfdOzEcg5EAIhAPnC2MZ8JDnCurHhw9Gf81xArr3r1LQ%2FlBQejwPKXjbyKv8DCCAQABoMNjM3NDIzMTgzODA1IgwYYED4PSF01Q2i7Y8q3ANEp4YgUu35UVqaPuCLe5Gl6GUZ5iQMRyeLqmTqROH5aqnmoejOuiJkgw6yItHrVNvoKiIdg%2Bf%2BC8vU%2B4Abv4S7xWqfGa5e1ZbrzN0yx%2BDFC%2FhOeB%2B1a4W%2Fs8%2BS2fhU8Dh%2FCnme%2BfLlB9zQKJyESSH0ClANd6to6DhfOxL5uV3iC4d3YpmcGwaf5M5EXis2ME9fPr%2FzSvj2jetetjG%2BgyUtenauSzVg1Za1NAyiK4dmusSRcvk53ZUxEIKilRgY1%2FKLE2RCIjgoHLWwJRiKVeO4WrM4FtXhwj35tO9O57Pn%2BKV2%2FNoRJQi9XIhgwGd9Q%2Fmb9UTN0AfLBU6Ja70odYarPUo406YrLoMT1iodwjwkeyo7JtgdIMi39cdNyhONVQNM%2BarIR9utKtJH8ZteugvWtJfltsZaw2vLvm5FCeAwA0oH3ix%2F1iIht%2FwJWFW4QOSbC6N0tJ9h%2BPzeju%2BeO6vNhO%2BbDEqVK%2BJeFMrR2nF4A%2FPwEoWJrEde%2FZfazx6F4ljzqf%2FZBhkRwxHmOgrs%2FFwNbLMd7MC3U3NM0QokZT3som8fP4T9ZIDdsepxZXRtYQTsART57aTHRBTL4gHU1h5MvWC4AA6Q3ZKt8F8q%2Fuc945%2FMfIJxEfwian7KljDp27LCBjqkAUi5XtU4Q9ILfsgDlIJSscboYcfWM%2FcmLknH0W%2BQy9RaJ12OVAh9ljkfznFF%2FELod8FkdjhSNkbXkkpF1OCq1Szl0Pb7FfMKa0lEgk7%2FUpcGh%2B8fw07F%2Fi5RtygDcL6Qi7cU1oOwgISFIbRu5E56AU2CbrNXNk%2FxsZ5Xmw0%2B4KN8RQVh%2BwUV4a4aBQMvsh9bsWztozH6QpG3hW26cZCO25s9aFvw&X-Amz-Signature=21dc60256f3b11aee498c7fc8c78969f41f0db2f3e207ebf5d7ef5b4defc76f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
