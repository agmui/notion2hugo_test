---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633TWELXA%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDggbJwxVeMXutg2Fw5OH7dxdrtIdeQCjtVOnu6FMD7AIhAOnWQ1RFt0UlnBk3pIKBAlWI3a5vhf14IN2DG3HMrWxSKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxT0OAz2uLOw10E9H4q3AMY8YL%2FC5LMz3zgtEffre0IuTCJz5JGFOfC%2F77rZJswHcmFD5U520hbV2AYvbFX2WUPyjoK%2FeujBItV%2FEZfJKZBVfhjQ0Qy%2Frpk0KDe9ojm9fhg2C%2BXyGud6wWfODORC248XyV6A4%2Fngu73qdOLPELroHpzX9XLepqRoEsInlyaRAbu%2FsKR3CEYN%2F1B4aMTGVh7%2FWMUTQK99RvccfzD32utUHFroCi96mJN21btRd3Ht3cNj%2F7UYlX8DKDr%2FXXp0lb70fy6M4Gg0jR2UGH0Pn3rZudW%2FfDzvmbhgPG4AiNRTyFcVMrkAOossKCsSnjH%2BJfdsC4UAVptQdTnMa4SJg%2FEFHe8WGppfjBJcDqlnrxQYiAKrpqgIhszRblL53NgNQXJJ%2F03dpiJunBm%2B%2BLJorNCCK2YwphlDmSj%2FvG8ykfbI%2FRcqy7FGiLqWmNdRYc3ManEFDB7f8klJyFdNe8930ytMPLgSwOgVe6ZHzVq%2BGPr2O2C7LYuheLtkAYADcapPUIXuqc3m9RoMF%2FYIXnsb2yeP%2F%2BF6rhhthUnbKrKkq6DXjwR2dIRq%2BdwaMXC%2F2b5RrQLaL56GbJnBK%2BCEyUS8WAFfObSYAhwlE6B4msf3ao4pPGU2czWU%2BA53ahyODCRiKvBBjqkAZOD24QWXHi10qkyKIh9bOfcTbevmVU9CTg1dZEkwmzwSem4dAOqZBlcv428qAAkye2WvLe4pmaxoeOeh4hu9O7TMlzDgzpJnbylTU7w229nilU8603p7I5sAByR8g0y8snQ5CgJ2psgvWz7Byo6aDz5UmvKQkns%2BtSU4DdgEMG5EVs%2Fe%2BZagMRb%2BRy%2Fqas4oam0hbJcUS3NzAQCYBv%2B0Pk1oFSF&X-Amz-Signature=537f9a94adfdcb0953b2910b936655f9ba71e6beae71a0258ff249981663c6c8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633TWELXA%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDggbJwxVeMXutg2Fw5OH7dxdrtIdeQCjtVOnu6FMD7AIhAOnWQ1RFt0UlnBk3pIKBAlWI3a5vhf14IN2DG3HMrWxSKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxT0OAz2uLOw10E9H4q3AMY8YL%2FC5LMz3zgtEffre0IuTCJz5JGFOfC%2F77rZJswHcmFD5U520hbV2AYvbFX2WUPyjoK%2FeujBItV%2FEZfJKZBVfhjQ0Qy%2Frpk0KDe9ojm9fhg2C%2BXyGud6wWfODORC248XyV6A4%2Fngu73qdOLPELroHpzX9XLepqRoEsInlyaRAbu%2FsKR3CEYN%2F1B4aMTGVh7%2FWMUTQK99RvccfzD32utUHFroCi96mJN21btRd3Ht3cNj%2F7UYlX8DKDr%2FXXp0lb70fy6M4Gg0jR2UGH0Pn3rZudW%2FfDzvmbhgPG4AiNRTyFcVMrkAOossKCsSnjH%2BJfdsC4UAVptQdTnMa4SJg%2FEFHe8WGppfjBJcDqlnrxQYiAKrpqgIhszRblL53NgNQXJJ%2F03dpiJunBm%2B%2BLJorNCCK2YwphlDmSj%2FvG8ykfbI%2FRcqy7FGiLqWmNdRYc3ManEFDB7f8klJyFdNe8930ytMPLgSwOgVe6ZHzVq%2BGPr2O2C7LYuheLtkAYADcapPUIXuqc3m9RoMF%2FYIXnsb2yeP%2F%2BF6rhhthUnbKrKkq6DXjwR2dIRq%2BdwaMXC%2F2b5RrQLaL56GbJnBK%2BCEyUS8WAFfObSYAhwlE6B4msf3ao4pPGU2czWU%2BA53ahyODCRiKvBBjqkAZOD24QWXHi10qkyKIh9bOfcTbevmVU9CTg1dZEkwmzwSem4dAOqZBlcv428qAAkye2WvLe4pmaxoeOeh4hu9O7TMlzDgzpJnbylTU7w229nilU8603p7I5sAByR8g0y8snQ5CgJ2psgvWz7Byo6aDz5UmvKQkns%2BtSU4DdgEMG5EVs%2Fe%2BZagMRb%2BRy%2Fqas4oam0hbJcUS3NzAQCYBv%2B0Pk1oFSF&X-Amz-Signature=8bef706e3d992fe08178d7b90c9c52381fa544b5352815e7f948f7a2d001e152&X-Amz-SignedHeaders=host&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
