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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZJ73XW6%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIE2IDYFUjvwDd1YlhMaT71wznM6Vqy%2FGLxsgRayl0uYPAiBOfhAGzUkmYlhQExLthGZNIdUdsX64ZDGrxkl8oF58Jir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM5uZydUv1gj1zZS49KtwDy2ICtRwDXyH3QRa07pPe%2Bm%2BaGSpCdNGj2VGXcp%2BPtDL08lKqP0%2Fv4GU%2F6a9FgiiLlcb9unkVqMqgfml6efL2yWjpEwUT97rbVv3UCwIrpHD3CAOoF1bcOew%2BoPds%2BYW0J9AisLvKXFZDQD%2Fk1aizFV3HbJA9hpMz3DXUkDiBnpEkvsZwwOEYajhMr8Vb7DC3AnxlJ5Uh3577fstDUfrPbintryxcD2MsZ2lpq%2FXg1RMmSUTWjdt46L6WONke2wtBfVyyoRhk%2BPVZULiWDjyHdoKUutIGgo%2F2CYpsvdKr6Lcr3HntJMU%2Fqx5nmd9W8Tm%2B8qRT8ciqfgLeTZHA1PTIPrU1fFW7BsVxfrUwxV5qWCbjjUXZcY9GfQz9RaudKpUDgf8JkEIXGfQCKzxxKRuNY7S7BMw0s7uRRvcHIh62654wJFW%2F8W1AWr8eYHhso7TTMg8Iu8EzyclA%2FUFX9cAj%2FaWPMO0KseR7kyjL7FtNLbvc2%2B75pVzo8iUHsCuksNqTp6LySSDm5TTV%2F63KOnpKwTpHZ44Uw07n7RwZegxiZLuUdk%2FxAnaX8HWSxqbKFfw0Qj9e1EFbJ4OnKOncqnX9a3lNn07xRL%2Fq5qHitONsawGrXo39ZxGinZuOFmcw4um7vQY6pgG%2BTwGiB1jsyDIWAQmpGwLd9BK49ZpXkf6MQpckDXRWN85TT0GTMrSFw2vFUpfgaQ6gI1txijZLyYtdCd956YjMJHhW%2FlfyigeyQU38vT9n6QNKLx2ZxsSuEhbi9zm2zzlxx%2FrrBbwFGbi2YXOR91LSPgYMzpWuu1Ive8JWQurfB2TCGCa99qvcx5cg97TXKPcWT5EWyEaE5hBfH%2FETvzd8VBJsehla&X-Amz-Signature=34352eb0a312267caa1d6ba81c09cd2b31b4e3788654ffef3880c10d58111723&X-Amz-SignedHeaders=host&x-id=GetObject)

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
