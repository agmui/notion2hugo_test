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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636ORDRQM%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T033047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzdwwLAbz8bv4boVXRO8kfGVnhwlAQw2pnjyraAo0PwAiEAnxreahPu8S185O1Me5sTTpVi7UOSr6xm5pzTFRPwVawqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHxhWaBqva0OYyoiGircA9L59bGPpEEzPwem2wHBMEAqcgQnGOHvGgclHCV6CnlhWm3WIjmxnWWdQ0DwgW%2Bvo4%2B0y2R06ThdwmynFcZ7Vspj%2FuFPab1D8pIr7Ahup7ps1%2FowDMm18tB0S%2FZP721lZO2A8nFyN%2FmpGRHb2Dcf9aR%2BGpZIwMSkgZHgUrgfJ5T1KEobE7F4a%2BISRxZKGcUsHStsQ2qSddfQ0snv8zxJBNrGAi17VNFPN9sfn0HNfpF9ZOdbR4rzK5Pv5E42qQc1gqqKXBBwVPA8b55LggPj4VU%2B10XJQKBf7VVe%2FpZpQ0HtLtJBB3dYzY8t9r6it7PFV2DOzRexYW5z%2F4PfeP2K4Wt9Unxu5H7b1Pb%2F0tj4HFGWfHzMwkPdfU2ZcitsMDxXavBNEEfUX8skTdFGqyKbF%2BEXrP1Ti5%2F3dOJ3qJNvEd1CFRrfmbX4In74wfzy3Msz1UlQlQyyYM2IuxBE%2F5OSchjyMdyfuE4JuGID%2B32enuhfsdx9aACbYwqJF2hAqL0RZg0A1oFIChAwkxwPhP9UCi3ADo3JzrnD5elvHk1wJizJg2jNEB95XzT1lRgKbGQBoc6vSmHM8hq2gg55VuuLJhCc4z1NAEgwIwExBxA%2FDsyVW9ysrN1vvXx3XvhcMKC%2FwMAGOqUBhbjK1LPHl1Lo5orX6JQEMldM1AUKsuYZGOH%2BYaIT22dBcFyswrSNGAc3XnxQ6lFSYF%2Fwxox9dUBXKKUcgopdKQJldRcAawRRsAYBjV%2Fk2Mjaym%2BaSjNNut4S2kV7T%2F3%2FlJXBzGWC5LCh4H2pV2WC4ZjORshM738%2FOA2GW%2FNQ%2BoTNmhu7O4dyXnrx1rRlhsIvg5%2B3BUBF7rI6y9LaaatJgNfkEKeQ&X-Amz-Signature=a3897fd416791c50e775f1a005adf64236fb01a6dc856afcf08d0ece5eca5742&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
