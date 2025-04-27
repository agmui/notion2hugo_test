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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJX2YTNH%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8Bf3U7L6l%2FQTd6Fl8ey00nGUYYhY0R44kk6p2G9zpegIhAOcQpIYZ%2FkphtGTTfBkpyaLuddPm2aoNn2N3Tc2YyxgrKv8DCFYQABoMNjM3NDIzMTgzODA1Igz%2B69j3U9NIA2EmM40q3AP69XdRH65uw1F02QEBJqrVgLNvHi336dEEk5SW8piy14TYOy%2FDCq6GNdKYo63WkOVxpRAwe7q6DWRMnLfn7MxUnDbholbPHX1s3o8y1juOGWsLlewzINi9bE0Lmx10TlK1Wqqgj3oYqkJ7AZ9E37N75Vvjus6ML7MUXRnriPNXPz0rGEK3KrMDKhnB%2B40WTV0khzPQyWwKrOnHXYayAvioRaSf%2FeGpR0PV7maC6zEh%2Bfw03%2FI%2BX%2FNcxdS9rLFvjs7U3VZ29vtZ3u2LS8si3jbbL7H5pf4SDKIp2nuBDffGB2KxxXQMA7KndXHMFv7ckrh9993BNUGLTLEkBSdJPSOptjXrPGtIj97hMXUdAZzBBj3CFjo9heGCpjaSFUEuMezyfMzM7MJFqUNHGX5jAgl2fYqAoaZy4YpKpEF5aH7MssNbK3pyNjaI9d%2FGhW3VKvCENBENvS%2Bi3eqYTofhUkCtX%2BndqzndGBio445kCTNiKNi8mcx6aulgjhbGhz5FqZOUs8icNFy5Cwre0lbaX7T%2F3wwa1852wnOAIjpRtyy4RxYUUy%2FjSxxKqMrqvWfXlFa8bvAzGXg5Y81gMh1%2F3xATHbZDSiPsb7JdR%2BfawQ2ZjqBBEx9fy4dYBPCBUTCb7bbABjqkATGv%2BLg90C5K0VLPEmz3ra39FBL9s%2BL%2BdQEAa9aJ5IbKen5ZQjuAmoMIdarhrp%2Ff08hRrQuu87ExBEgr2VHfPssfEffBjDltsHViyVpNzw5u9CMAp%2B3rk2Q9IsOrYdgz9zr0keRwES7mRw%2By6yYrJFVs%2BKmmu3r3VnfF6IH%2FzJghrh%2B3bhw77M2Wriq5xIsi0XQC2q5XrBIbS14Pw5RnQsWOChVx&X-Amz-Signature=542682bee7b0e132a163f899f7bada4aa1d69f5d29877f88c053c24fb17f2a0b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
