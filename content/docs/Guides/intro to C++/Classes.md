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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YLLQ6I6%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDC7wBYBsIj6F8JvY37flDEgESGgU0iYDj5y2MBTJyjqgIhAOxIQUGt34DTeLLIIrut6WJi333iPM90bAMSB3eZgWsUKv8DCDUQABoMNjM3NDIzMTgzODA1IgwY5rbFUcTZKhmN31Mq3AN9gXepgxh7%2Fa%2BrPyRw%2BUBBkqO3WA2VDcsfQrm2bvv7Gha46vaxORtyMBf5MvRjpLZyb3GN22j%2B4RcqVXA9eNZSck4pVVkB%2BtUI4b8EkgfX1V9QHrU7o%2B%2F1M9GZgY6atZlHckcqn9f7H3%2FCqzA3ClQHqpzKKmBOqHl%2Fg2RnYFM4V5ZMG6KaDm1ENpAMHOsGJgUQJ5%2F5ai7ChmXhk8PFjWawErSPP0aYbrVDdWAVNwj5gdc7Q2r3Bo4IJu6yvceSZLq9%2BGo6MHnzrWCew24ASU%2BgZTJFziwj8uGyWG5k1eyIYayHNrzYcGSO6jdvyHJd7Ir%2FlDYLvQOAiEzTjWEOR%2BzpqfeGdNnPoWfWADAxyMCgrjkuOkLILlgjWCuxIJPQododyjPdXu0sbBRQr2A2A%2Bj%2BdjgrXt34sYIHFjgyNg9TY46Kh60dFDGIulu3bmVGFDtu30s4b%2F3me%2Bn813TRscKjiSd%2BJ%2FxsemWEZGZQDNS8J%2BFl6RsAiLB9awdiYy%2FzkGW29ohNgKvDjGIcItxdf5dRaEG0PSzoHGH0Yn37WmjN4%2FOhMV9eol6%2Fnya%2BuHGBUaZKIMRutte4eGQDxVAZUE%2F%2FSd0SbWM0xAI5oPeemkxpqUIN0Rk9ByIQnJ0ngzCl6KDDBjqkAT2NrBU0UJqSBHcv2qPhvoAhdN%2FwqNBlJps1jvY1UTZ%2BnMQQDG7Cqo0ZEB4UyxMUeXv%2B4KN6QxGyT7CnpJEebORsGcOeUxT766tsoGKJ4%2F9OhIBJM3C%2BZvANqm0HJecBCnhnl9rKvEH9dfpNwqHGf90qIhcQR8fTeTK6E0p2iSP%2BQ9MCnyg2jOD4h5VlKddrsrLx8xuLBPlUurxegAsHaaF%2FprRo&X-Amz-Signature=5af0283051e47fe208369c2571a608c067227bc12c76a1fbdc9c17592941f09b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
