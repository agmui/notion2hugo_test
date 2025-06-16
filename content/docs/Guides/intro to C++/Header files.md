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
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KMVCNQB%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDskrlAAhpYsvyurN0q4t8yLqXR%2BTytOTr7YP4wkQLywQIgFV2hBaqc8zG0QjkhXCWYXhxYszlJ00HoZOlWMss3Nw0q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMNfZt4t2fSqXp4XuircA4g%2BbBtKPlzsIsfMPBsuv%2FdSpFkrycIgh5ZJamyy0N7e2dkS4j0TfBvfRdnICAJ1hAx%2Fpr8EVN8TO7gpqgfI9q6C6r7vvu0oR8cv6MfRPReTCBgv47FL8OBBtAqyeht6tvq5Mn0FIMirAO0SimeXjDKtm1C7e8yjEpMbsT%2FY6MuMeCoLb2ZD2AyEXCd6qCLi6JBrE7K%2FACdj4QtmWKZxQjPC7DWAqvIdpvCc4%2Bilg1PvU4oJmTbjbVhDejF6bzgXMXMcTtv7DO%2F3jocmDjuxUzw4BJxo5RzBqiKUfHwaZoLeWVEirleZKXe17Ip2jrPHct5cY2G4vZOGk1QJk6jcbyc2XaNa4NQ5snuJsg0cK9DaHtA9xJ80xOXp0EjEwvtXuhYtbPlHcJN3WwiKoF5y9nffnYvNjsN8ooDPUJ1jz7QZE3CcunzVMksO%2FiBVKCZuGNsPmaV12SKPosMzJvOTDTNvLdAwKQYgAMHV4NhQ8bxIABQ0mW3sc%2FurN2BqnMf4crU0UQmVnowExag09ht5FAZ%2FLYlOb%2BkRJYoV4nKIxIAIRuwaK2u734Ww8YQGJWE7nkTMYwVI%2BVcRWzQ4Q%2FOunc9nznwXgBwfp%2FbA5h3DPuI74SzoU%2FpCPQZBEJ8SMPzIwMIGOqUB7682uKakOwEQ7n1KiD0SmBCGu%2FGRNLWF%2F0YctpLmT7kHC0xRDd7KnJfZX%2BCgtwo%2Bgq9IRw7Ko3jOScJCHs7Su4o8oTP8hbUk0%2B0Ha2AGDecZ8wBZ9%2B3OflSuyzSUTT%2F8S5cng65%2Fhf8gLBlEhaOIJLbOAjUHpJaIj9LuI1B3ABGj9Zkv3ljhVFKEd7qizdlB0dLOZwm680KxAr%2FbP%2Bhg%2B0oJ9iZD&X-Amz-Signature=0eda375172a099119eed4b84490bb7402973722cc0ef39886adb383e96d212c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
