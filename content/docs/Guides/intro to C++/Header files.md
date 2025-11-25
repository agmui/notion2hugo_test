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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ52XOOU%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT0y6O%2BJErq8YICcEDAX6H5Da%2F%2B1hFWAd2PPPa9dyD4wIgblhvoL%2Ba45lu0Di%2F09dmLBpzYTv9o%2FD5rj%2Bj%2FOgS3y8q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDI591uAgLiFFbDalkSrcAzfDjQ4ZlROFoOElUxk3up7qt%2BgrRCx3t3fU791Coe9V%2BI63LaU72kzynCfAxnWHHH%2FOauhfxEPVmoY5JBD7Oc2yqZPZNTukxxPU8V1MmkzG4Tr%2FFRMJi7%2FAg6Zsokynp%2B7nNd6jPk%2B7qLSzLkwRBFloOH7ZgfjVu4PFLqdJa81zzxegIeOkGCZ7lXXGoAm11TDTLHQQOcqizivcLniipmPhRtb8OOHxBJuXabXasWEydOC3YbGz7K7lSws4VHrCS6laUMrkIPbXUS1b0obhR5WcJYKxlTxNzzS%2BeESKi6%2BPwOaduoeTMj93noZsxN97bVPsJph4vdfZHhAzWdeSQ93r3xpZ14f2%2BDMtqbLV1%2FWOdrEB6SmkoqGA%2B0BM5bFj%2FoY6NVEpzPB3pMDBQyCVvWbOgDDibahlvuZsJWZc39n08tRUAlymmzMbZ1BCNHfMHD3cLaV52CKQ8raM2BHlxZYa51L928DV7RVBndQ8tUzOvqxi3F2SCRTQfFqcXyLMuvLSEX1hWyfU644lC9rIZK78JLW0ttnfpmYvpHARgerConzfzOV4ZknneUJeaT%2Fa1JEMArqdO%2F9xuF%2B3Og8HmwshpQV%2BigJBqtPt97z9gR1TIAx%2FEHjsFqIKYerkMKTLk8kGOqUBOBJlPYobRxLY1PQC0SmpNuPj695msOsWZh75L1DMSi2eWMIXnqqyzWsm4uaBvmvPP%2FmIEf1ZYtrcHbVlbLgrLJB0iACfyy6iv1wK7eETjDg%2F8IOkiV2K077ItudRBchQSLbIVVlbXtw6AZsY%2FPItdwyLLPx7qwwAQ10UOzVROJckPEJDT9Zp4zpxg10FieLIlUk518X5WEF0DNfrZS1Jv1m%2FY4Aw&X-Amz-Signature=6e7424ef7937643a863abec696c763ea9be513a8629ca6c2121e42ce118193b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
