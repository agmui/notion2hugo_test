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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRWOSCOX%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T081248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIHIf7LZyzNirRKQIlAIygtwQK1pfBKS35r4Pt06jRYP7AiAkVotlS%2BwT09R8W0oGsr6IgZV0RaUzY8UvaHWo2TW%2F9iqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy9u%2BE5wLAcS8j6J%2BKtwDGzOQWRoPJsLO42EpnpYEHOXlaWT4QgmnESnzE5lHccqqWUQiDABKQTr%2F8r3pvP2i0esCP8%2B3W45Nw3VDNC2hKcgpbgIvGHfnzPJFAnDDsdhohbdJmWqaB5nmav%2Fc5wB8nruYmUCP%2BPsxbq2Nl24h1qGKvGeJSRKdL89%2FEPJ12wZgYYleSbn7HgMP9tgSr4ePmydn6xbb0yXvp2Pd3ohUth%2FnzwQwjF10b0d%2FOJdEtb50IdkxxcsTrH%2BdOzeRrWFxDagaENOIWMN9kxC8g%2Bt7e26y90dBF1terdAVjsnb%2F3PMeQwjTxFXhM%2Brk6rLJN3kko%2FUiZcaAgN4sgrF7ZVwVobY7eawhVlGJAmfuYqvOvACbHND3BoDoZFeJ5jXMt1yVkefhahzvB2UdYW9Q1UqprbDu%2FOGwOEi9X46VGoRB%2FK054Tv34iIXStfAz5gsDxK0RLKtHXr%2B7VXytSKLXqy1ig5McvYQU4z2jSy9mF%2F%2Fdp6FSnnJ%2BlhzxGLx00k9sNfKQcQGt5DkLeT5ARqtDCSgEMaEFewISXR1QVEbfApt7a%2B9OFOtlyCP9Is1H68JTqSEYatnllDIR%2Fi%2FetWdLmVY%2B8M9X8ZiIPFD84Ml%2FLDYK5OqyTVKYF7zyiuOD0wsIeqwgY6pgFQMi%2F1wNpjHkoJRti%2Fg3IxFayaK1y8U2EQqxCz3CQxNcsYAIFvM5tUx4TS%2FJa0qQezyp734mh09kwKuJfnouTMK36h74aTAJiblazEGDEpze206UAQ5KejH0UVpFP7JN4kO7Dx61XIARuw5ZU3DetmCSbsfTK%2B3DDKDLLJsC%2FIzQa%2BcdZpOCAMoFf0WSrNDqCJ7dBjblkEE8FX9sP%2FfkfUwlfixfYz&X-Amz-Signature=d1da68efa46dc86ac3af61f4a98d603c2a8138089e6dab2c887589fefd4323ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
