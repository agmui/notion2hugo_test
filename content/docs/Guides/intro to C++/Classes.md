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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z4HQZPI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T220134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCata4cLR2n3EF4Ra8TiKg0bmlFZTyE0iEcG%2BNyzakOPwIhAP0QHLeJInr6Pk1u4EJILtq7rZHTY0QeXL4DZmfFzx%2FHKv8DCE8QABoMNjM3NDIzMTgzODA1IgzZSmur%2F%2B52UvRTXToq3APX%2BbHZFB5pu%2FNgA0ISwrfLmXhzfAKpSEHd43qVz%2FF8iDXEodzjtKKbUDyUJ189HvZiafNjli3imBnTvm0xPd6yAxzmC0%2F3P8NzG1za3LOLXjD13m76ONv8jPLrosUDTeBK9NK8waI0zsORnqIqqCdvTNx3MuYFtMvEOKAwkz15sy0cKMUvIX8PUyvQj7a%2BCT8PltO5HxvkvexjvfxC3LTlBH88d%2BCxVx5sJXBdSYRR8A7fsmAwgARyV9aDGjDHVUw4%2FIzG3icmhRgYnnjQo%2B7%2BWDKal%2BjZAo0dPKrABnpQ2HdC2HDM%2FN90BNK21jH18W%2BLzjpTnKAZHowjpKzvnUxgiFDXLIRFn0Q%2BDOV%2BVo8DoBC73fhpwuwpY3ZAJdrUCFF86TseKI0YqJGWGOyTftjvM3iBLdXmdkKwBWOtGvDFuh5o5e94Qqn7MpcIiYXfxCgGEVCq1QJtoBQqY2GWT2R5u82FdE5lDX6JS5DIWzvYdjz71THMHL5XgBJCoIo3YXfZglgCr7%2FKm86v1%2BxoWEipajnKxGH%2B1uPvaNNTNwYc4YpY722tqf6PVaPk%2FnaHlJ6RfVfYwTFeUDuVu5b7OhG8Z2QNEFmAlFwvSj3tpegE4DEQwb5ydnZj4dnXhjDwkMS9BjqkAdhwZxZTuN1SqIrQe1fadFTLMml9MCf%2FgC9AqnDQO8ggC3%2BVD3Sr2icnWqoupqow8GxRLtqsvFgO1OtbMBvvPg094k%2BGr%2BsU%2BB7wCHhPgoscyqZI5ZNujbgPY3MUSMqgNWo97e55FQldt1T4GRiYUiT5kdRmMPL9hl2T6YL1eDKBNnh4kuhKMJPPcnUJdGR1PHWGAbmo9U8NPCz1YVBGo2BqHF3J&X-Amz-Signature=b97e3ebff0dd3ef35e8a7442884738088dfc2cb7735626ba6b25251116de020a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
