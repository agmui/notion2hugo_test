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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYAOXLLS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T121315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRE990tHQVvcZb4CAp%2FZet02rC1da80r%2Fq3tYTEYP8xAiBUm5Whk13XOLdpvnEAWQIhWRzLo76vQqGMs%2BLyN9ginCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCgXwczKipWCyoxKOKtwD7sT1Goh0hsUHgNxsSNvECSAkkM8nPSb2pQtthJKTCsD5bOoncd6VfsZ8QHXF5hcBiJsh%2FT3Mure5%2BY43%2BbJd%2Br27AhorrIELPWnY9Yue2HqR%2FdrhlVkGU9ZPRvLjfilBbd%2FOj53AJrqaenAfEe6bV6hRcp5MdtWqSH5TcGTYZWGAE06%2Bp1NffS0qmPc3kyiL%2B%2FnmqdUfyUMGtfu4hInwLIh9G3vOVzBmXlpKy%2BnEOy%2B705jFZPVsCE6cvOd2MwkBigR41aCjVEft5kCgPfG5GktpzqWRVGuUBs%2BxvUmwvN7sDYY%2FH7K1KCFYCnhSqZT6LUzwxBi%2FGm4Yfcosb6KMqXJG25fq2ZPNlmOlZIqSvJ7AUUPPWs57ZM7BDV9j47Z7oOKqZ%2FKy62g%2FE8uZv63J3mAc3EEs54VO5rnPBHjzD8l742d63POq8Iuqf565nl48RfYxv3yqEAa60LvJ31HcNMF8VGieDEXVGi84of%2FPp7%2FFV%2Bvf76R4bUWA4vcQ7cYYpGNwpCfku982oaKwawtGBx72SowGRP84vFBn82gm%2BawA5bSog34uW7ThC8Lw0H6SK7bCN7btaSiN2mjiQk6ce7%2B847ZCR83mPrw8sJzGG0eaP3wdlU8GYCDe2vgwzY%2F8wAY6pgF4mH6LlEblI4FS2AUCbAramw8tjVExxKnJpQbnRiC5VXds9Vnh73hD1CZorvayAonU9jgpixrsbGAGnNwWsC1g5fkojbbqbxLEks%2Bmj1AzvEa%2FAlv2IYuYYM4wk%2B%2BhqGCh4OeyJv0wODCz%2BS47GJyckTvmPzGIU6xMUcLEb9a2yyRA3dLw5%2F1lXhEqj8lp59MQEtTFojE54EfChP0kV1HLjdsNGZv1&X-Amz-Signature=a627515e718416a352fdb03569e64b7770f0cdae488a159561c0b3ae3ed0db4a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
