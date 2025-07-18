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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RODYMGR4%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIEykiJUhEbQjVwRg%2Bfe0gVxwdXyFAa%2Fah3tBI%2BxDw8WDAiEAmAA7hbQy1JkJnwMuUi7EmfBnloNRwC%2BBqnAtYwMtjhoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPW%2BCXR6aJdI3KdKrircA%2F81VFQa6ZPrhCXAVDRnQyWmMKBwE%2F52ivsend0RDipZ6WhRlwfMOKluElm0aCon9Cmg%2B1KTuN0jktDuzU88a7d4afGRstEOszhnNO6iditfafGgaU30MD8RNpKlRMNZOuVNfY1Jr4Y2B0c6PK2OUQRq6b0ebbT8NCa33iLiVsSAzcFuKYQsAGl%2B7FAhuhNmb0w1EAukh61%2BDIBn0EDDilDyfCw0sDjbTZPKX5gBhKom%2B56xIbnvDgHnDkddKMS0WMr8%2B297fcqbWJQR1a%2Fbb1JpWkgFgvp1JZ2raunSsD%2B0irqfSzHZoEcNO0I%2F%2FlGGwouvdZIT1VvaowM7IY4eZFR%2B9ZAgkIJyNQULSjmLpsqrj5dB4b0f6dRR1c7a8SXqSquk2oQAK92yFezWLw4bMmKp0HaEx%2BaFB8f%2BR0ZWzypG8FD53%2BUzCAdiI7bvTRMcXgCq%2FEBxEeoaEkvZh%2FKAA0Bhk98F0CZRsn3Q8VqIMDRqtwdiRT1Aytv6jwmQxGSIZqPR8KtCHOmF62VnDrhqYgxJMsYTaR7flRMZpFnfbiNIkkWftdE8DYFsvTYwcOZji5xy9Scxw99GAkejUfBQwfeXxlyqOjtWjTgYyo7tUFtOmkiNlCqmydVD28czMMWv58MGOqUBXGludH7chObi5wLXJ5jhatKJZJmo6TcaphdoibPcntWgUn%2BEHplmD7qj0E7BxTFVPaWRXvV7rzw4QOfMxym83WplpjAQt52BSL2ure5zW1OgPjkyPOt2M2cOYtse9nJPPyWQx0J%2Flt9BMOAhKImC%2BlKOGEKKhSmoZM9itZ1kxuQLHHv%2BtUHCKQcSINgZJUjUIU2X%2FzB51BcpOh8jn%2Bgxs1yxQFHV&X-Amz-Signature=608f860d9a74373c834ab4b9c03efe9e28f77881b8932234e2a0bfe22ce396db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
