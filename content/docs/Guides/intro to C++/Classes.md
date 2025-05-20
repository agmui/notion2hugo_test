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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HGP2JQC%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHfnRdy%2F4dCVgL8kbnAyZb%2FkhthwGoSoApSVuNYJiyBBAiBEWoZZuXqtWbo%2BcQQvW%2Bp9TyCzOUrukJjJEUvJJ0LnMyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7fd%2Fbedh3EpJD9CoKtwD2NriggksN5MAHqmbzmznsrnwGPNISNRse7yptbX%2BWVYnwuxzhqe3bLNE1HDcTF5IwWOX%2FL5667koQgvsvyLOpd4JU4zZyCQI8XWfb%2BKe97HmWaKF2SZakiJsnhNSKmQF6qjYejeI66DvUIhLU%2FnmR8Th%2Fbb8qPd83%2F8r1K8EVjV6QZy5iB4o2HjawiNbNJ%2F3FVldI6GnAxycpoQOIJwbWUo%2BGjP7zQhSmmMWFlDMXt4c5lCPqabvKgd%2FExpmIc5JBaDAXHZljlwdCP9jI%2B%2Fu5ED6DxvCjzJbLAk6x1OcX1277GDBZQ%2FRXJlqmKv4rdiEqteb3b5EmTpTO84HoipxfQRaet8WD30oxjDUgQBJ%2BdWqJNNikYuw1Yp3D%2B9AtKnjHiL09fdnfKeY4Fkma4OSIOdwNgCprb4pVFReWmq5IlMK11O4TAH6niQkBmEWm2BYRB9Qb7Uxc4W64Fnv5e2gjFoFb7ltVFwMCzHgKMdfX7qeQKPq0bu30u6lonY%2BF8aUoTbXPFxoLsLPNxmTsLFoAZ6HJAOqrlu5UfW5VwWYUMfiZb4MkSdhDDN2JXw%2FKIcq4pvTCsaaP908VH%2BK7r5JLAOyZJ%2BxGziB6C3%2FRT4O8wVAZuezN7Fdk9FJH7wwppSxwQY6pgEHdbjwno2Xac8LKlPda4fEU6%2BqbG2R13WFWdBfQAxuk9hiltYLsYAhQBK7M4HD6Jqk0XzZOG7TF4Gir6vm%2BSHICLR71GkoSEn6IdgVSbQF623VaSDnrrUeZ1TJNt8Q1fZI9muNTiykZ1VdgqToTeGAWiDdJxofvIF7KENU6JEcdTerXAPtZEi%2BpslaoyqieraXzMbXGy1F2HpMtHEEJ9Lksf4sUJw%2F&X-Amz-Signature=9dc63c6016557e14aa59f0c4de67ff46efa7ae0e068ad50dfe6343303c1efd44&X-Amz-SignedHeaders=host&x-id=GetObject)

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
