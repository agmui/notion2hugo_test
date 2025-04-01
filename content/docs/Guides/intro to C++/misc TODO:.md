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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XLPNMGN%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDHqfIrVvjm2bvyvIdg0BsEcEdO79zXZF341KowSPa7DwIgWkn%2BhQ55wP2Nqxej%2FNIofQ5Pl2Z8hBqAhtWk81bSmgwqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJDn%2FC3Ixmun7XerSrcAzjAlPUIiExroLi6y24O97BCvSwM0npM%2FWvoOdACIgq4JsNpY%2FC2svWFbxij0v%2BL3o5u1v9ictrCaTXoxjU2vUPdW4JLGqhaSN5hrCVRC7DtHe7xkEMI99GT1ih11JpPERuDbVPPW4%2FB%2FDWG4aaXMbUZuztH6w%2FuRUETgs5XLg1RAJyc7ze9LVve%2B%2F%2BMgf6znAN%2FkvIR%2BkccsSHiiy8RyMTOoHPLtSVu4sw2Gw%2Bdey4CdcSM5DabZANibIlZf8FlfiaUn%2F1EEPJHw6E7F8cWXi2wKWX9SCxy78gk4OicPEAKgwzi%2FHv1ZxL5fFcYPlKXl12%2Fb%2FG0mqeADSsrc06mR0ZqNVPJcnke3sfv1Ed6%2BC8ZdzoMfEW0KyN1n2tfU79t1E8MkNw3peHXgI8Wfe5Zm2lDkqLF%2F%2FkmMOexZU%2BN7oqWQcsGHxTbBvl%2Bqm9t%2FlrsxvyZj9heb1Our9REs%2B9ccAcLcSyRZ1UWnbsPb5Q8CSELX9PMtBUS%2Bs50XKNyMyaP327EiYmrTjBJ92GJa4PINu77x5gRTK5byFrNwH7cPJkjArZC0RDdkoSFKxptNC78ELtf8p14YIZI2QCJe53outeuKswyAFFVgoyZZhWcd%2B%2FURSQAaptg4psTKp9vMP%2FVrL8GOqUBy1NeqH2uBW9lJN2rn8Fl1MyQqj8FuWlBchll77Ox%2FYpjQbQiIvy5bBTRKPXvNpy8M2x7E3RI0es0ngVuV3BMk0qs7UBOrJCyrmdjC2cd0tgodNWsGPf1yQsuEFY%2FPg%2F34sVEEdCJHrChh06o7MCrxSdVfS3r9KxwwmOP5NfBFsydloAk%2BGolZr45ABdPQnGtDVnfFBNechlg99fG0DoEcJQ9m8IK&X-Amz-Signature=4fdaa0e30be12b8093c52503ac8ddbc424d666d010a4fd4da48d76689a1820be&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XLPNMGN%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDHqfIrVvjm2bvyvIdg0BsEcEdO79zXZF341KowSPa7DwIgWkn%2BhQ55wP2Nqxej%2FNIofQ5Pl2Z8hBqAhtWk81bSmgwqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJDn%2FC3Ixmun7XerSrcAzjAlPUIiExroLi6y24O97BCvSwM0npM%2FWvoOdACIgq4JsNpY%2FC2svWFbxij0v%2BL3o5u1v9ictrCaTXoxjU2vUPdW4JLGqhaSN5hrCVRC7DtHe7xkEMI99GT1ih11JpPERuDbVPPW4%2FB%2FDWG4aaXMbUZuztH6w%2FuRUETgs5XLg1RAJyc7ze9LVve%2B%2F%2BMgf6znAN%2FkvIR%2BkccsSHiiy8RyMTOoHPLtSVu4sw2Gw%2Bdey4CdcSM5DabZANibIlZf8FlfiaUn%2F1EEPJHw6E7F8cWXi2wKWX9SCxy78gk4OicPEAKgwzi%2FHv1ZxL5fFcYPlKXl12%2Fb%2FG0mqeADSsrc06mR0ZqNVPJcnke3sfv1Ed6%2BC8ZdzoMfEW0KyN1n2tfU79t1E8MkNw3peHXgI8Wfe5Zm2lDkqLF%2F%2FkmMOexZU%2BN7oqWQcsGHxTbBvl%2Bqm9t%2FlrsxvyZj9heb1Our9REs%2B9ccAcLcSyRZ1UWnbsPb5Q8CSELX9PMtBUS%2Bs50XKNyMyaP327EiYmrTjBJ92GJa4PINu77x5gRTK5byFrNwH7cPJkjArZC0RDdkoSFKxptNC78ELtf8p14YIZI2QCJe53outeuKswyAFFVgoyZZhWcd%2B%2FURSQAaptg4psTKp9vMP%2FVrL8GOqUBy1NeqH2uBW9lJN2rn8Fl1MyQqj8FuWlBchll77Ox%2FYpjQbQiIvy5bBTRKPXvNpy8M2x7E3RI0es0ngVuV3BMk0qs7UBOrJCyrmdjC2cd0tgodNWsGPf1yQsuEFY%2FPg%2F34sVEEdCJHrChh06o7MCrxSdVfS3r9KxwwmOP5NfBFsydloAk%2BGolZr45ABdPQnGtDVnfFBNechlg99fG0DoEcJQ9m8IK&X-Amz-Signature=9c4602b38f0831c52c2859ca4957f4ca278701c71a0a91bd23eab632f2f536fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
