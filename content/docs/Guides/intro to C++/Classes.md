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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4R4SJ2T%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T133313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP33ezpIo%2FTrXJLg4rMlgwHSE7XA2FJ4dHIUYCsj9tzAIhAPqqajcpPzMeQTyEjwCvcgzMKz0Udztr%2B0gZglxy1ivfKv8DCHcQABoMNjM3NDIzMTgzODA1IgyIcm9kWzEGHcUm9EUq3AO8pblg6VnCx17qr84RQvwjO9ZTOq5cFGMvcTIZfjhezm77obnQjS2E2kozOGPMmQoAbQACl%2ByaJ7Jdryyh0notXGNAXIaSexitiKiAaT41Sh6hOHCFQ62ZuXxP9wL9jNXCYUsDhEsaB78FyGYJQWWIprv3ZeVWwJoxM3erTdJ9bkMdLgM%2BHq%2B%2BAPu1oOT4orHB5FvncjK4kZGI7MDQfMNWwDntJPtzzq9tl%2BfzudOXlvTchnKe0XNHxkboU53vkF5cLZ9QrW9vpqeF5bal6siBXY%2FoOdKuY3%2BevD8Ma%2F%2BfeOc9C7RMSbR5eUvgz1wm6ZTm%2BAGzJeRTqPC3n98yto7yaGroh7JS9m%2F1koKprGwWSNglPPpFSeSyq94WgQF1LNhwPxYpFyic5OG8X3FHHJQ1GmQ8A7gKabWoXznsrSSHOz7Z8UwhWQfIVg5MU0O23r%2FbIVXUSrgXhjcFzCJpHFz8SHiRo315dARRW2T%2BOJPWavMKbgTPTCMs3qXY3PFywgFOnOM8GjIxVuzCnjIUvkSvdnFL%2BCwdKNqR2bqtxqtX1cqHlU%2BChgXan1uhGMpgUUxlIo3dPThv82pwwus%2BTXLCY6DzmjWbvFXJyzKokvYlUoLu4Fz8N3zlbSfVuDDmg77ABjqkAfujDX91tSNB9weRCVxBYF7HLChisolIVvOHJqyd0rwERJoVHSmk7L7wehbc61A2IgQeSzD7tDh9ZwVbG9rYrudBLnt9nwiEXrc8gaOEeTiSMbS9pPKWh9MDs%2F7dpqaCUnk4ajtNPHReTur6ufw05RujbwQb9jEOphX77L4MpsvDwWqvr5heUKeH%2F0VjjQd258ImDNXD92mMr4gaKyel3bB32SF2&X-Amz-Signature=f9a68bba1288861cc9c9e1cde490e33b660e7cab8c6accb27a390ffb5efe1882&X-Amz-SignedHeaders=host&x-id=GetObject)

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
