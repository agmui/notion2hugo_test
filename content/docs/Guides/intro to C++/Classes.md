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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5MPSNC4%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIDFS3FKh7%2FnJY5TkZTE76UsvZdHS5SI0JdnlAsNCAFArAiEAoOkbQogDW1bS17LgsdZKoIDA06edxdXxylhH9PcFF%2FYqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKtw4HUjBR7JOUQ8CrcA1HA0gbA0q%2FXDfO4Q0SmCfBgFmAazUUb7ufVtXxfiEtVUQ7fVGWkPULcUFTmZDHjo0WNUQsnDcsx%2BihBbKN3mKhxJjz9OOIblECWshxFcKm26pBzqJM9Xev6zulG8oW939baDLsvU92CFgaNQwBvt1z7ouboWczxTAspEc49VqXQfkOOQwfGzsxmsd75wgCjxcbgBuAYDS0ngWeM6Gz%2BlbVM3GGsaX4h63oO905zKbScnB3pYcbkwHgm8eanbSslkQ7JyriERVDQaXcZBfK%2FNh6IB8n6dgQlVvc3jpmRL1g3scGO%2B6jLUe6PGZgG90%2Bq4SF8neGOJZzfruPuQWUmNUP0xcZ4OxNM72j8ojEYtm4ybj6j1oAynnyxPKxobVP7Rj3hdZX5POuTvxzZSrXYWoYqiggn4No4SfBVkk%2FQvgx6%2F64EhzXShKn6GsqCyJ5fN78YcNfaD5XSxejixdFwmPbE%2BkgzMGde6z%2Bi6W9eF6OH3xgtoQbqA%2BC%2FjudOZlnifLFLv3%2FG8fwnkv6PJjud7sJIhPKYYeqnQKHWVMi81G9W6%2FV6g3Jtz11kQdWEeCZGURkSnut93G0rafMPRJmcuEqQXvZH3NGfES%2B17WYtCXvKROEzYsTKT7xdCWhCMPTYg74GOqUBbgS8ZqOHG5pQp7ZOaNRzXeIxX%2FEMvXacDaSYzbMi3fdLkQ%2BwVCJFSaL3o%2BFbFMwGsNDde%2BixAAup%2BrxTe3MFROMznax%2FXzQqus6UUW49GQJHhn8GsAy%2BsyyVAO1Qzk5%2B3QXG8LaRkNrGM116t7DbiQWFXdyF501qPAsu0taKOHuSO281zlyPp07SaOdt07DcPggPwXLkZm6jt8V0vGppGLSbN1JF&X-Amz-Signature=0682570d9368d108f4b32c7ad2f71a57f753c823b9d2fe46b74c2189991707c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
