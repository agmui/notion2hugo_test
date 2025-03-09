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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGUH5DD7%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T230123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCtxGw2VbkSPNG8REq35B2sctyFCllTNp61N87OgzB%2FCwIgbp31KXLeuhpLhw9WOeAQn5o7jfYyCXImKuR31S%2FIM3Yq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLbPmWJxAxdgP0HmqyrcA5rBr3xEwLm8eKFBUM7OWUShaN91kvO4yGmS%2BH1xO55QecnOJwH%2BZxO%2BRME6LSP4cfROcj0j0twAe%2B%2BTJyoR4oVhxdwxa2QY0NlGHcbic0fUR2X%2F0IZEcn74XRkUuzSY7diqdQXbOMhqyprzc8hKwfqIPf8I6pUnfghrshwjHPlrGOSooftC6v%2BRubrukDWAnOmHsl1b6NPfVVvpq%2BvXJ09JKQSKkaeEzheRluU6%2BExDNK%2FcCy4rcZTXBjW77kssLafI3HZTK40sPsZBp2CJz3llvGub3lNmn8S1HxR%2B2OkVB4r7UOV5NOGyXUTK%2BajRVrYiwgnHRpqvnj%2B7H7%2F%2BUY5ba0Z0gkmZ1d6M8KbC%2F0tTwTSM6wpaRxHI3eSoNthqDo7oOKf9QEaOIu5Ht9367O7Ucz%2BpRFMH5Hu0rkzbnE5mGkBW3yWL%2FpJ7dva2yDKnsUhGS35NEY97i8Aty%2BdR%2BQqaS2luPWAqpOWQJMGzGpbTRkDJq3l5w7WLiqPRT3x2d1fLX%2FHSXIPm4NIuKBrc7P4CoKE5AgZIX1uSvO6%2Frj4ZO305fAfbPoyEhZbhZlavVf06BZAG0TwvnXkogoqZ6bT5Mp8eYwVf%2FjwabqAl%2FFtJhWwLHXwbfbJ9e6%2FWMNPht74GOqUBA%2Fu%2BsBRJQ3t8Tun6hGzjLHg3%2BJ3ozsFA%2BMCJj%2Bb%2FwV1h9pvbYNDVLlZVyLQK6qEMUIJRL847jymhGMTQ%2BankicaP6ojGZcRe6hbnYZCu55Y%2BkZ6YGjGVp3cE%2Bt2FiFoFbMNhvgWSRrYjKVbqkfO3yIfriRugLQe%2B8WvUpFIEdX2kArlZCk4hQHcuBc87Thni9gKiSEuyhqBEt8QDNuiqJvU4IaCD&X-Amz-Signature=b75951bac809d18653cdaff87a8075b367e97e9d56bf4fc4d84acbd4172e5cb7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
