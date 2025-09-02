---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

</details>



`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FJPUATM%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzUrlI6sUgkiQ9ULHM%2Bmdj7z5OG7ByMXnW0KpsVkIUjgIgSM3sMFqx6YzpCSejCcrLNBvKxfgoAI54Jpmp6okBWZsq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHx7Jbiy2l54Sad4pSrcA4D91aja92I77gryV%2FRNC8UHeR4mWAVJiMtj%2BEpwZiisMAnQCqgYyMvfHh0TplGjlGF%2B5A8vYQp%2BfqaFHyEa9I2C%2BWHpY487mG2YdL0G3E9O5YFOSs18YX7GGeqI1G0dwDe%2FtI%2FmmXNkoM%2B%2BtFYS3klC%2FPaWK4sWrNfocmTI3uHvC9rLX9t2eUiwaVpHP0uQcMRmHsVanNW5GNtUcP9z20Q6r6Ym%2FOOs01CedenQncx850cf5Dcs0U%2FXeO%2FoHnPcnm4p7nhTmtZ4CRUwNJurozr6oY6WqCsP%2BGUhBb30vpnmXDRzl7NW%2FrPbshIdSllVn3CbXau8o2GzQkYEhD3yAC8OB7r7msJS4SgkBf8vDvTUFKNc4HOp4LMbBvto%2F6bm%2BCbDnv55QlQbQ0A7m1BLsf5xcGCr%2BjfpPzKN3HZsyDjgIdP4y43PBJ9SyakZZ2fnvPQ1UUWoTa7951D1wLEzCGIhdji1bBKTqt2HwmWBLByMmn3e%2BEELseiHGgXcFSbNN%2F2SWqkieH%2FxZGoVje0MgEIcTSWaFU9lRXRspQP6HRET5XFFV1R9MEZNxP5fL%2BSfy9IiaMYCJIhKRZZ1OEh1nbOTfn3cc%2FHbKXUIUrvNA0fu4DRFZgguFImjb6cRMLOL2cUGOqUBW3fAH289KWbD61H%2FYg0zvKK1FSaKrTW6bITjz8yYcczoalcR9MZkAbVJA4gL5Um1BTJ50LmLJGlFCqB2gxVrogIItUVNBXScDsNd%2FdGxx%2Bgg6OoTXYkTnU%2BrI7nQKGWQgYg1zGa7dML6%2BpKmqF5IIXUYR5aWwy7%2FDcyo6el6Iy0TL7ec%2B9W%2FYdpf8yat3y0o20uYJRHZDavXsqbQhNCWW4bknbuU&X-Amz-Signature=353735f47dae6688765787813726d3092e8a753fb337432e55cfc61579f8882d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
