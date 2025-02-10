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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTUKALQZ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5JQxorjT0XTNhDo%2B4j63cvrG401BXL8aAoYfu6kWbYAIgIUXNfOHquPAJR6r%2BKL1Z76FHAihzTf2XPXX3dgJvEZsqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfpan8uH0R8%2FfLV0ircA%2B6mdeyq6mpNgl%2FGnH9VETp1Ek%2BhmiLWpnssP0UMbvW71ksVecF2YnEZAgHeNfRHwyElcI9n%2FydcrxUsDIu7MqyI9GbE3%2BMGyTyUmrGodc0xiBeUbBuZmQGKCsygX4kclsvENNUmPyWQaF3Iw4MOi%2FsqmV5z%2B%2BibGNXL%2Bl8FYDvN0NrUzi85PIG1WE9WEPaFHMLbdPE5vC0J4qQ3fZrwMUyC3SAAuPArnSvmJAGjiXYA6EI8HTDptWmCbI%2Fy8%2F3kwTKNe6STpE%2FQejLgTCCON45W6RwGDyUJQrRB84sJExJ1D%2FiU4CnwLr7e4m1h7%2FAzX%2BGL9AKN1qPZ9yIwF8zq4dJdzVRnsnWBXGkIZzWZEvAEH5E%2BDJDgAcMkfrKMn%2FTs18KgaqNrICbf4%2BkK1C3MvTp00DCKNR91TQ2BwiadGK4fEyHdnL3Is8Ga3NxIHwff%2BJzqx%2BBalnmyPaJ7kaCYNtayKPL3poL927JOP9s1qLVJHLiTM3jfSiJmvehdja51c%2FKLnQVR%2B%2FH5AzRcVJaHeexM9p0NBUkfTCv6%2B9jtEzMhfHBYdzIfQAH%2FFs0h6W1j9iniNS4BrDzUV81ehJOGG%2B5XvVmy0voiyWO8B%2BgfTXsmGlcuhdWANAuu5CuBMJG9qL0GOqUBT%2F95v9vQIzHWOVbUVTw9Fr7C7xIU1cHMyROUorTfJjPiFsooIE%2BORd0N1SdD9Rv9B7G8lmlqRGKbhDV55xTpGi389Z6rUeZ77VWKmgvCAetan5sup7U14p1UAEL6253DqUvkgwCf9K7GHMYVJ1GsVT4%2FdWz7VH8%2BfS0p99LjTg3a3Do0s4lnU9kzwcpJSALchhVQpMIuyF6lNsM8n%2BIRq37oiWgr&X-Amz-Signature=aad53fa1d4a4652001de40629373348549380850eff627cc32a46ce21f50e421&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
