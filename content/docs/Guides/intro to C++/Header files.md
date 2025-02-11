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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XRLSTJ4%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCac29dvhd5d8J6VR%2FHVQddl%2BN7jmfp5I6hVkC%2Bhc1NpwIgU4Y8Q2lUGEm9I0CqL4ZQtbnGFFI8JnYxd3YkDLr5HEkqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK857FQZnv0dJ5%2FdISrcA3IqhMftAZO4578qFkc3ycyAPIcKOUMG6WVv0B8fJFvIZNZXDT2FuMBZSLAzEKz77Fffw%2FoqeKLXqowlL1YwqKRRky%2FelNqC5pykNUGyTzAGm%2BZ%2F%2FjgS2KC5pwsE6k2POtiSeUN0FzLDq%2BjcSg7LrTAd%2FUoOIRF5O4EluxkYIyLpj5rDjzHvrKlx1N%2FGKYYTLmimd6YMy2wZ9%2BL9aft8uauRyUbqvZhcmGYN5eJZfN8DdUturEDBBWxEVwJVu%2BBf13VmQdnwmv12luNBWIfJb68Td4sJ5pjlRkng4CXsg2rKpkfCOOO%2Bzaee2%2BKIniDCaEr%2Ft4v3CEphP4KnqF%2F5BEHVaLcfMhYN7KqbqTDJp%2FyhnqaKX9HI0gxmtEgVIvB5AzuzVcuXaw9pItytHcaob8XZXMlLUdb%2FxrjfUHCEEXjySrkC8KPNX3eLrRdzVua1iJXV8iOMmi7iFWRwSlYDz%2FtQjun3k00Q0B7cUvrcJYHoBzBpu5QbtkCvpBZpcsNoO6fepKK2KIoOxhuKhrlEdWAKYCMJqX03zzY%2BMgVsLbS9ew0SpZ22murAqJjyyy9K5iPH8BiO5eCGFiDPNwpLokP8QPYTQgUivbtpS01fii9Of8NKtF%2FcBMVwGtLGMOTcrb0GOqUBdg5OIgZdrUc6M2mPoc4YlA9Y%2FCtAPaa0PR4pldI6tZI4J%2Fo6JpEjuKX4JmxaW4F%2BvNzKjQ4XZ6GODL4FTd6wGf%2BTeqPK45l1oGJAE8yQMdHBSKe6vbJORFWMMALI0%2BP%2FhK6LtZypeHkbnXqWs56jfb6gxY72yfyByn1yIry3eZ4JZ6yPde1l7O4mjHoebVM70MOIVmKUKp84vKc%2FO50s5HgGF5Ep&X-Amz-Signature=37708c3f7d228d132b92f0fcbf4d76d67364dd1db032ab549f2b662dfc9c58ea&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
