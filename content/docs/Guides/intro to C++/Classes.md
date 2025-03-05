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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQPMIS4D%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEMi%2FAWuJ4dVEfGcDZkulpLGRkXdFQZjd%2FFTOPAfwF4gIhAKPjclRY97HnrsfO4RC4IejQmZoOxUzCKkjUjYKqoHMNKv8DCBoQABoMNjM3NDIzMTgzODA1IgzKZ6X%2BMrkZMrtrQYgq3AOs%2F%2FzmAn2E301y4z3p8JGovjc%2FsKdp4%2BysLufb9hlj87smzmXj8A4UkigzmsAah3ZKVL%2FN%2BLOf7JG6%2BHEdwRYAVrCnPz58IOO96%2BN2KdMUAe6rCG1MojgLDQINsn5xbqy8jE9TtiBmpJSj5z6zZ%2FPu66w7XJq7PYCbZq1cXzbLHR0tH2oQUjnAQEQzEYDWU1SoxzJRYFHmOrUjPngGMdEop1NeQdmoGyyoHhAMczKZIsctsLbYvbRWWG6gw0kmCYxvnAx9fpFVf46CyE74vfGpqctsGfuR2AQLb8BJ98wKCDB1H9adXF9TyUI5jcl8r5cGkPzZ0Lku%2Fof9hJY90c1kesJ8%2FNl5CzxFU%2FtpzufR0RsR14sUDhQa9LJTZawVsStTqoOmYpgBPhbftQ1628XVByMHL69F%2B5U98LEkMF5cieAXbcR1tE7zgLDUnm6FYBpwYJ%2FvNQhBxCTGrk4vuSkdg%2Bp4opVZvNGKunN2TM2jXiVKwC%2F5F8O34YEjhuthyA8Bd4JweIMGBNKl8qTpXXMosa4YJOgxpWhdngcSoSXBbHqJ2MbVhvSf4lPtoOx3v8ew%2BW%2FxZwtNMJY7DcsQCiRw0gHdtRBasFI8KOxdpBUpDCOSs5tBkg7zEA%2BBhjDwg6K%2BBjqkAcVc%2Btmuprh0YSoE5ON7fftQZgr7NMJEcum7CKV%2BzrckEzqRMuh2OlJu%2FIBn5j8i4T6gWgiI8PiBcH7m%2BSsFILgTCeENxE%2B7TijNNjVAKyDcwRnIdQ1HC4Eex66kqaL9pbfrWCsXVhV7849ZHh6DrTrLmA9W5e9L%2F0tVtiWxk0YHCIWZ2Nm0JgJJZT2BuNv37m%2FuxKNUVkDYbIviLHHLVP5CLV8N&X-Amz-Signature=e8e4e20e8beb039704e36efe17822338c6ecf244a4a2cb718d0173fc86ecb600&X-Amz-SignedHeaders=host&x-id=GetObject)

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
