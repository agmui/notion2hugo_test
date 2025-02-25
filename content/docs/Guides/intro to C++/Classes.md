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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWINA5WJ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCICiam%2FTKAvrPdzUfa36nklnKSxzluulhSrsnKsoDrJ5NAiEAwycIpirAZFIRlSCcSIR6dg5sPk5nIWB0pePZo22dFj0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDMpPjRhMpM2TtIUu2CrcAyDSDfWmXHJAvVI8UgEIoDamCiN75LtBWlJHhAR4NbGUA0Eg7V%2F7wllZMFGhhbtmmnfpSmbREtVXyp3PO63o4XDBBMAqmTBTCM3erEn2cMcCQexD%2FIvnOEmTnVKy2dmK7XTcXVQHTCSsXiQrBpGULhcwe4gdt%2FgD6blDOxgMKaXS5unw4oTF%2BlLVwrvF0gmYmV4KtdsOpegafv3ei8nWsaB5z7HTCObLwQIFrdXNNqfUIBQSESueHL8XI6Kza5bqfhg0QifGtI6paEvrifM0nU9rwLnGWl0O5PJia5CwAEj%2Bva6aB2Vl4KXPvKV%2FEw%2BxeaFtGL0XoQQKZwVrLAZ3ZWSZSF6GmPzfyMWNQXG62mMZlpGIOCM53LMts2l71%2F%2Fv1JHvT%2B8ke21tTXxMM0dkGH%2BAqi5jW0YiAN1a5tpHE510tnSEFe0WIrIwLGBFkbV1wqwv5IA4pazZ%2BNjEFRjJDbzpiXGr2G9kXWt7eDg90nXpRPaVfgdt9o6oJeZ7vV9tjeqn6JvGeWalooQ6Qn9njrNWqjqqYja4L3mJOXqenTVyg0Vk3xAAa6A3GMNMfk7IOONe1hwtuWkn%2BbnkgXLoNR0icTCgfCzVMuUmEwmwWfqL8tb37Xn4QHZbaJpMMOqi9r0GOqUBeEesmvtBIWF%2FPF5x1lbX3YWcawNkJ6rV1b6TcROSoxFYRVehKWOPXRH4Yjs8vl64s8VAIopINtCn9VL%2BoHlEIFAzy7dSIH9CgeZ7I8vey%2FJsCVsHh6XZhQnU3%2F5BgA6JC0UR9K96YSkzvWyH7edLpOWaYnNgcrtERZefVIV6U0Lb6fIbZ9rjv2TiL9aNw50zG4iGFqFQk1gNG5D91ixPm7EQoBcr&X-Amz-Signature=e637e25e1f09698fc62b71fdd4b53004a89710ace1ea3089614920610b8cd27e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
