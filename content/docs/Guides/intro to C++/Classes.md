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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TVDYJ32%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAjiPmfaLyjAvp8DRxPWjgMhjMSgo0wc1cOhUih%2B0e1AiEA%2F6GvdbJJAxnrORZSW67gv9Ug1UjTjcfZQGUEByMTG54qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlsZaUWhFLX1HWj6ircAzTGU2pJFSVvTdu5n8ZDQNrVUiCMcyWqMKqohaVc%2Fv6Dkvg1gz9bQk9TyDij2JbZM2sKz6eCrWOFb8d4M2od1KxqTtdbAhHCH03Lqev8Q%2FIi6o9eHYPqKFS7K8bObVoF1QCBRJRf4qyDeVa4UDSf5sJIVP3pebrYxOAsbDJOb55hxRw2tGOfh368B8QBy5txkxjFkXOh4nWSiBJKE89LQR0rCeQztlZZa9bM5FYGUkZpWgbcpq3M55ypmNa1Dbh7YJEDJbRr5DiMHTryR1QAa7W07cqD%2FGEkMdyKwY8wt3TqMjzowaHV9N%2BGr5%2BkNRxTwE%2FQtF7bhaXoeZ34pgzcfaSWtrZWITWeTdRZnTYBWqai0%2FzUSx80%2BVTu1jn6zp%2FiToHNAHx%2B7YnN3T5xkg%2Bw2QV4Z3BXGvuV%2Foy60Lyy52ahbfjIajV0uP1UR%2B3hIHX%2FYp1GexErWIF2vIt%2BzS7khWl2QJxT2U%2BExICI7G53YZz6mmnDfjj95P9zCJ0SaZy6thh6RpGmWz9n78UJqxMWVEkLqwF4hYTEqiFg%2Bd1xcuSNUCm2Ujk3bAoD3Zb8QJ%2FDFuJlLHDOhum2NCKkFBxHz%2B%2FzGa%2Bc%2BUTeDUMpVLMm%2BPxojDEmW557OwLeYXyYMOrF7MMGOqUBo65sWzIsowOyOq3VeYEtlpNwWjEMu7LFSt8WXZ0vKuAqO95JsW%2Bo7EJf95QLyVscJAUkapARDVL9IrFqXpZMooNsFoWqNpaRA%2B9xXqI2yifnwUZcboNUQ1JMGHdF0BTmLBbqvyRCwCvREphV72R%2BPziPu0CW0oz1utl3ioUKH9kO6WkZ5aZIduscvZc60StoJkgfTywiW0t86NIHdkkSz5vnw3vm&X-Amz-Signature=5d3ac6cf8f1e4e90ee3b9088e5add15921aae5f7b0bcba4ceefaba1b51475596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
