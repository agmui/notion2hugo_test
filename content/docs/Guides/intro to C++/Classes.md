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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFU2U5CD%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T100807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIA1WwoqoiYVbRSq1LmlIqEa9sKHBRr%2BE5UCN7R%2FCKJ1oAiBgN04JTu%2FPYghKLrZ%2FlRKm3f4FntbYfeUAVUP1tbzXgSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMhTzp3Nfm5uMjIP6aKtwDtyzBx0uebsJ3K4oeCr3uMczjHgpG04%2B%2FC8qaxmpmiWqji0zHGlnTeDDtat8B1nVbyg4Jpf5i%2Bk%2B4C67WSdFIkYY%2B9eadAsRG6rVtA7vUZcOhXnbI0GwNQaEiAuY8B4XKCJ85nl2bN8oubkSbaO0AgFIPJTpiFWIYEvNMHFO08fzUfsNncykzjn8xSKww%2Fho0c6jw1zKJ2nQDmZOzQeQO37Lr8%2F6pLP2Q603eGBXEy4UWSgLzpjUvNF%2BhFAFf27c7s0QWHXmmwu1M3SBFA0YyxVPOGXDxt%2FWvM%2FfotR8Nnuspb%2FNGUno2cje7ykTaSUKdE7I3cj%2FZ6Vyv0vC1%2BhWzAZoKwAFe1qRSjvGvksNsrNyXnuTnHitTeMGRNjr7PhJZbOce5E%2Fl4krDEspj4sml%2Bvxmta6JZpg%2FarvyDXrStmVDBLqq83jLZWEdQuM9iR6Jd%2F%2FN8y%2FvIPriZzw3LqW3W3ogrRireAmsEsMez8F0KYOnnT%2BICFG8j%2BIzPnlUG1C7fIMXTiciHvMjlexlclMXiQfKZAmsJk9hrbek5yPdNDn6ann8zXluOt%2BdCCexTjE6SwwaQ%2Fc4t7O0VZxpg%2FrR41sc1OORhXjulNHxUcQ0VrQ2RNQQGkQo5ybKMkIw4%2B2RvQY6pgG9ahQNKwPd9I6vHPL3IV3HmJ92XuOCWVywcl%2Bz4hWTtRFW8mNneRs2kHxEshf5X0lzzBUaZRY6ZVHUSNgiNUMxPByHbDnTzWzXF8qvjsglkDPmSdXhFtBLeUDomldzCd%2B8pS%2FaJoyF4gij2T6GC03yPjIdOKaKg3V7s%2BObcZoPutgOjtnVuVp1b9QwV2fPZ8UJC%2Bmlk99sWTl6zVKL3%2F5A0vduuFxT&X-Amz-Signature=409682bd55916e64ebd6fd99033cfc090c788eea88cec089a0714094228c07cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
