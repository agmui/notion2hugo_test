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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXLC7NU7%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T034628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjSSfo9r2oT68WN78WPRDFjXVmxjmikNB5JdE5aHSK8AiBtfvLq9ttz6iWcCNtoloWCHpBwd%2FTy24yGL22sBm92giqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdDL32lKXED%2F4wHS5KtwDEyoyq%2BYkTmIl1zD6H48RAuIUYEEE3hG2E2%2BWsk00CkXjF6%2B1X0aHGRQzoILuXMDuVo8aQFuq0ARhf%2FxA%2Fe3AlC9PkLPh4wSpAhze6WTsS1WBdXLKxmQWsgzRV%2BmFIbEJ9UzjpPvVOi4TMSEhMOv%2FkEmTkn5wegp9o3fTuw5ttBkrv499ojAjlKV0e1WQlV1770ot9awPKpDEXNp1jIKvkEQ6V79R8pPG1ywkmy7khTLRKGl8Q3OEP0kZd6XR8cMETdmMkDe86dwnVGn6nV%2BalhO6dcyd6nJjAQLxQbYZ2ZYbEbjrTn0m3ADIF3lP4VpzYt4gMnNs0g3w2QM0UJmM6zk5NCiMT%2FcbzQl4cfzjeIs7040qCe4sDmhTPokeKdcE%2FOQCLjg02j4%2FWgOo5ETbIn0K3NBLmo%2FuaDTjaeBxTE2FIHSoJODJwf8Hy1rYrSm%2FrWgT0lQzElaMNYSdQrPZb8gT%2B1%2FXqD2TsNcMugmYG7ZAPtW6AEl7mj1qjIuJegDw94IU7tOjY%2F2pfn8kwxlSVCmCF02w9uapPwsOZ%2F7piUgj%2BTrHskDRHdPzMGu7H0gWSyzXLpv8lAi7h%2B%2BfRxYMHwfNAgo8la3H7yU4sHj2jMW%2FO7emTQ8oMLkLwKAw%2FrrdwgY6pgEIi0VQvU9cVfnYGk3U16n50%2FMeCbuxCmvnT5GS7ta%2Fj72fChEAVfydBFwKU9K96nSMalsTlTCQVVsyg1eht%2FA8JlxyFjSbXUvNDiVt4%2BNGUXZuhZsSYJSD3hNkx1ZbnmDIvBJgTeSkDG%2BbXCIN%2BBFRGoUldFSjuPgKuYXny6Lm4fq6aREF09%2FjeNuCj%2FBRY2bKjD12fQ%2BqgBDRyxK3O2arJ%2BG2C631&X-Amz-Signature=94f0aa706f2053d2a606e2ee38a0c7a3814f01fd3af440fb2236a7591ed14a97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
