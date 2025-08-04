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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YHGSSRM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDs8ZXyNAxZhxoTdYNPnFqB1eVAXJZljnLlqCrRxyZDJwIgOS0sgUzQdzvzn8hTkZDNJJCGH%2BtfJEWBPgE7O94Nf%2BYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDMd94bpHUX%2FWTSnboCrcA4MEKJyyhzYKougiouqqeZmXrWB13YVwbE%2FCup0ioH6rJ1rBUaGgG7SLT59ijZ9CTVEXcTHetE9r1LBf8%2BAv3bWC%2B6diyZYLEmS7OpmLwKu2RaAffsCxTygpMKmvTCehVrmAu81t59VyURJ0LFtfG5zwgfZN%2BQN9htVZqB6imikqLlsPzRgfswvsA07vlOdLG37tqjNoK1sVz%2B0kjQepxqTGhAUR6CtfmGQSmnaw4kkfc%2Flw6iZ2G3ZpfzkRwbiZr08DMYA1px9EJk90y3msSAV2Gq7isHHaW%2BZkEqF6tVOHUIUR72SF6EZuHUBWdivRQmtz0QItgVYpSib7HahHGAJsT%2F92TbHUT%2B%2BzKxKnLbv7XBvzmNMb%2FsTYkCc42GpKAzwepDRGAqLl5AcU3Sj41NLIIglYScYkzpVFAjl77MG%2Be34Bo%2BBD3EtH1eZTy9%2FjkKEXkatQv52qeKW7A24E%2BanaW%2BFszCL%2F1Dp5Qr3nhSwGze%2Fci7MpQnq9yZ4BxA%2By0JJT4F1ICzxXtokHEisH6L7VlEyhuVReLFjixt1nTkgJ8AKchHnalYwXJ0zbZAfa%2BqqpkPbx%2Frse3TProuL3yvxLtKZ1nUzjZM9Q8a%2FlJm9yvplbitP624zOf1zwMKfOw8QGOqUBstoqzX0Utde4Anilz5JmW1PSS3yuVls%2ByKBDpsSn%2FrgRpO0VgIRQRD9xQl4%2Bpv5CBGGsY33SVQXLajl%2FaJ1hLMO1cV7odtcWeVQn%2BeaWPLKckkCzn7npEs98neo1JVCsxSOzizK1QzWZqEf6asRC8mb91RENJnrN%2FwW6FnlD%2B%2FssvtgvNhQi0K4GJAfJH3rHn1KChJSWuHMJXp91L2gnFFADj4zW&X-Amz-Signature=dede19fb34be246634b8f37f9a0a94b3fb063cfcdad515829765d4dfac38161c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
