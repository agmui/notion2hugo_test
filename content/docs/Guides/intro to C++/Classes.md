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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAANKXDG%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAZKaSZU7A5%2BmIfw5rt7jnvukA3EZfUurv8ZCgQQGtVwIgXjSAWKGkA0K7lCp9wDFd7pDZEUsNBy5%2F194sxN5C%2FMQqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOHRPPuvd5BIFVXOJCrcA28CsO%2BB46WmzkYKAjKn3eMoV6MwFnVWqedjI1eXh45qXCRp2xjh7KftZOuDDUJW2A9ZWolbFSmrhdykaDaPhH0kzMlQDo3rLWfjowI5CXvGMKbYDUJW9IEgdt3uWWpD%2BDrN1aLY4tlzW6glyWae2iXkeBZnp0c3qgRRL6GQNj67NNf9PLy7m2AGOOO75bvECsRZ0qc83J%2FghxIEHPkAF0y3FmRfR%2BqVEs09y%2FWYtCI3Jo1GzhcHvTzrC3tFypYEn%2FzXC50JaXsZuJwzNEarwjVjngc7mLB9r99251d%2F1yaaVGuHWkGINOnzHawxsxzO0e8e6v%2BxagTy9xGacOkfb%2BlIKyJKLcjfiMr042QELYPrwIPNI%2FzmC44W%2F67EZ4f0sK6Ze7PiTUqxipOUdchm%2BF%2FqRC%2FSzkZQAk%2FfTf%2BK4bHEIcbPUT3ct7s%2FXshUmbPaJzlAeg6eYPZurrT3y7y5nLF%2BqYawMAGP0M%2F1Gabm3Oi0nQBhB99BNw0BXCgs%2FbflnfyKe1MsWr4Qm5YhJIFcwjh%2FTw39A5ORyUbXh3tevtdONVQOe%2BPylwpE0AixEJ5fchW%2Bvwu9qd1pTr8S4pZ8Nvppr%2BeZttdXis7w8oHtieWCzKc7VPQ5Ie3Oq6FMMJrttcEGOqUBbIPPoBZh4oBgltBiGJONv79H4ex5Gnzb%2BoS1OJYmigGsNUsaoQi25qaJELO3HEKokGQsdEdd481q0LVcQfwsL1ku48ldvrtyEdZafeR5jUzIQ9dPG39YgsFWvCB%2BdmQZcbVcEbtIcWJmxAWE0Q8oBGFgiaFkfVmODwkfAZpPna3Lh1mirlqWI350pRV%2FFNEgB8eswtW1DhGRA5SpFU%2B32aatU7p9&X-Amz-Signature=65bea892c566e62038acc7ac7741246c36f834d487ad802ec9bf52fccda04d6f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
