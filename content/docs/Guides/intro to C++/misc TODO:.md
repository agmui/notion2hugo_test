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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5VXPQMS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIBh8xtQkPR6K3PkJEPsWoUTIJzXaN2xZOKC0vBjcePU5AiEAl%2BU%2FXOB2aJlg2sO2Cjt%2FsCyFqY8xxfZJsdzJzamvJisq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDA%2Bk7Gz1D6B4w7nsLSrcA%2FVzEDm0NPlbawCngwjWg22G%2F9bnJnmfitInG1%2F81VADqVxZu%2BNCq%2FqlQKcpahntgLsNscOMtlHCAC1UAKP9qvHjywzy8brjckuhLDCPbNyf%2FhcdmYtWgOBEpkehOaeHN%2Bec6gWicPeoVznG2vYd50VKAyHsSsCIx7WOutVC6Bo2INspjp79eH5WfhAbpecg6%2BG4UQep25N27hOQQnvI7yD4r6bk5A7NMMDbQ91HJXF3q3BEZGczYR7K329mnwzG2eBxN52Iosud%2BQGKRCqFZL%2BzGiflntzcZpchCDjAqA7FeD5MMybWlyl2%2BMgxelonVxfUAgf85dRAh9HR%2BChjJv%2B3pBvFqlvJTc%2BB2g6wheoJz2B%2Bo91gQOlxHuxaHwL2RWE156rMZefylfFmW2BTgU36xTmp7X4x7nIZNIEDiMLlLVFB2AuAJcbzP3XqRMXCHHypQ2MEWLRoput5WKCHBmsj9v15342ElrQ8A970tw94ejnG30moBvD%2Fs3hj%2Bb5eid5VZNIpeTG2cxnsEPA%2FFHLujnpf0zaBNs90UP0VbRrWHqsWyM%2BJQWQDz5BOf%2F1OcOwPHmiOTtuGImyioC9t9AWhch61zebbGhTzjVEGCDiCdUgfOIpxuL4WzbIkMO%2F19sIGOqUBnUSRjRfD3MmyUdkNEAmNRfVD5GeOR3Go9ICqs2xVEvRrL1ALwwwGenwb2xacJ6gTU27Jnn5XMJEWBqWv%2FIma%2FxrgyNN2SDG2l4TOm47nfl7a9J7WedRfvxHdep5WROY6j95OvbWFCAf26XCbuZiHqEc0j7%2BIeJ51gHyxGz0vgHnu%2BsWuqo1%2FRqKxo60ixANrQmwS1LQTrRdxstFHHpikHhBnLiON&X-Amz-Signature=2d50b9f4a02af48e9b548948d37d050726697e1a829364f6f8f523db09a5d9b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5VXPQMS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIBh8xtQkPR6K3PkJEPsWoUTIJzXaN2xZOKC0vBjcePU5AiEAl%2BU%2FXOB2aJlg2sO2Cjt%2FsCyFqY8xxfZJsdzJzamvJisq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDA%2Bk7Gz1D6B4w7nsLSrcA%2FVzEDm0NPlbawCngwjWg22G%2F9bnJnmfitInG1%2F81VADqVxZu%2BNCq%2FqlQKcpahntgLsNscOMtlHCAC1UAKP9qvHjywzy8brjckuhLDCPbNyf%2FhcdmYtWgOBEpkehOaeHN%2Bec6gWicPeoVznG2vYd50VKAyHsSsCIx7WOutVC6Bo2INspjp79eH5WfhAbpecg6%2BG4UQep25N27hOQQnvI7yD4r6bk5A7NMMDbQ91HJXF3q3BEZGczYR7K329mnwzG2eBxN52Iosud%2BQGKRCqFZL%2BzGiflntzcZpchCDjAqA7FeD5MMybWlyl2%2BMgxelonVxfUAgf85dRAh9HR%2BChjJv%2B3pBvFqlvJTc%2BB2g6wheoJz2B%2Bo91gQOlxHuxaHwL2RWE156rMZefylfFmW2BTgU36xTmp7X4x7nIZNIEDiMLlLVFB2AuAJcbzP3XqRMXCHHypQ2MEWLRoput5WKCHBmsj9v15342ElrQ8A970tw94ejnG30moBvD%2Fs3hj%2Bb5eid5VZNIpeTG2cxnsEPA%2FFHLujnpf0zaBNs90UP0VbRrWHqsWyM%2BJQWQDz5BOf%2F1OcOwPHmiOTtuGImyioC9t9AWhch61zebbGhTzjVEGCDiCdUgfOIpxuL4WzbIkMO%2F19sIGOqUBnUSRjRfD3MmyUdkNEAmNRfVD5GeOR3Go9ICqs2xVEvRrL1ALwwwGenwb2xacJ6gTU27Jnn5XMJEWBqWv%2FIma%2FxrgyNN2SDG2l4TOm47nfl7a9J7WedRfvxHdep5WROY6j95OvbWFCAf26XCbuZiHqEc0j7%2BIeJ51gHyxGz0vgHnu%2BsWuqo1%2FRqKxo60ixANrQmwS1LQTrRdxstFHHpikHhBnLiON&X-Amz-Signature=d6dd65888ccf4797eca4913539aeab7fb228e18cc000c54b60ac96f6d0353c12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
