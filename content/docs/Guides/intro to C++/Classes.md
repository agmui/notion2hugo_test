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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNQJJIP4%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxFK89FRDin%2FmQCAexvVhifRAJhdDUT%2FLRmCbjsb3KlgIgKNih9tnbkSLSaXIUKHh14Y2Rg9AMDmTzWdltWKqCEpAqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTtM8%2FF6GnQT9LM7CrcAxxqZjy%2FPXdanWOOvdxkStK3kEgAs0NR%2FPp1YhyMkaFykZMV89khjvc2lpQuyDm%2FGMr975ImRQpmfZyQEmdaKc1mJniToQ%2B5sgotaoJmvE48%2B3GYcIpg2PQvc70ZGooBnDiw1cpuN0fARXrz7SX7tw4zahnfZxTP3fUVV23zrJKZcy8aFAhR1Wk%2FtVRF4rARU%2FQbbi4sgxaI%2F9aYrjW%2Bs37zahg7s%2BFMMAXy8m%2BTu5MzJ1FNAx32xrfQJ80VfQ1fLYIr4rJpzlGt4%2BPXJ3z99zUeHFhpu7ZhdDwiQIMW593pqE%2Fx0eLAZgaCXsTnPN%2FazPNlrM%2B648DJIlJ30grQ0CON1xl6yy%2F6CDvEszLxIczXWgkGzj5o5Sl%2F2yMAschBRN3Z2nEHIdfww%2FwcS8DexSQxcGW47xbE58ulilI98X6q4tFBcvImTgYkQcpOxEy9aybmdX%2BW4DRtZn2MNRR72LreL0zgEEGtTXkaE0m0k2m0klZZE%2Fmfq%2FbQvmStLHy7TE023D1LRqPNvmxOq53wIFkEivR6DqfjSaN%2FhpsbzxvmT2gnKhgt1AFWQHuEi8Pb6HMu%2Bu0yEsSIk9E8ilxW0%2BebCUOxF7O9kK3tf7y%2FZdd4Y253bAiSRXlwt%2BQmMIXK%2FsIGOqUB7HQgR7wrKv%2FPDAvNvOuh3giF0rT1jZ9gb5HzvJRCTx3CNNyrtdDo7ixw2G9%2BbfQMmaLBEpv5PLseHOf0z0HP%2FER51mCzU3CaphOozlYenLYsp8Xhuigvz1kyRJqsM9g2Jm59tde4EMnR%2FykRP9ena09%2Fwlu9uJva%2BN0db7HSVFt%2BO%2Bbeo2zUXfStWA2VMwQsIqeiaWs%2FqHDxLX6IIjF%2FO%2FidhNj8&X-Amz-Signature=da8760981414048d77cfc72e61bf50f247c288a1acb58ed0a8d4f9a1ab20865c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
