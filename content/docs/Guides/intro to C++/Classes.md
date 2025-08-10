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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIKBQ6LD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAtT30mqD6eHKubwuPNGIDy4n%2F1iEQrbKzAqolLG1f9jAiBbEMvpskWzGWe93MomGsqSYn5lmb4IJEA5L9Lforeh%2FyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhiPO8BLELHidjCCcKtwDRh9VjIHl5H7TtxwtYtJ3%2BEqQg1QOEtTiMut10tQx%2F3N12UnSQAsAP05uX8M9DeJQA%2BSBHYNllPDv1EykxIrJfB%2F9n6%2F%2B8ybaRkk%2FlY%2FAi%2FlmfWs1UX55P6Ts8wn9w9pWivV2nfujMx%2FKHSDx%2Fp3RHZ5efIPoRUBIXm%2FGC3rccSNYVyx1iBWxAzhgtWCr5tDwCOkJLO5WK4M6aYYpZZv1XV25LRNfP%2FI7J9UMTIl0g8r8IqZaC5jh8INy%2FwlK4fOr9is1OuluuUn0gyEutWeLvN576Djz0FQ%2FNHdrEfOsPV5wiJ%2FhEDROAQcQEerHvZYkTYQnkRQ%2BVoz5bS6eCz%2FhiwGs%2FjEFSQX0WHiD2uR62PZp%2BSwzzUICFkJf7W2zNpnrs47wN0Kk2J07jlfJpgFmhkHQwkKhvp4gNEoRgBNFAtQgsPqoZ7DESaJa1qkMMVE09Iwhz3PbpvAL8nE0N%2Fbb1dM%2FwdHRxnpXfYzdvhLbYI6QzipNURV6UsAgP%2FaydGBx2oeW27x1QHKaAW%2FWt%2FnveUHIKYZ6aQDHqsYNR2mySSApVVWQDr13RuNB%2BbcdPgRLZb22NngEOFJ%2FPzoZeyUndCFK2sIEcZGpiMwJpCl0yk%2F8XA%2B3eRjTAdKSXvwwxbrjxAY6pgGWVn4q8UIld1lAqxBsflYalupy0IdpNwgamuGuC6sFuK%2ByBbCp3XyV%2FVN9iZHSPo%2FbXVaTEp%2BJeZ5CdyftLbgs6Q7sz1PpvZ4DMeyKw9hkYRadPu7OtNUbBxpvM8RYhXjI08SKjvOjEmCUaJhPk3ZEms9KMJgS2mCOjCluqED8G6dqcq%2FHQx9ks%2BLqaOiGcnVOfZDvV8IDA0F%2Fgd6LBNzS1sNmQQ%2Bz&X-Amz-Signature=99de9982072d82e5a670968e05c61d656042b3697b62adfb3fcefcee10c29c61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
